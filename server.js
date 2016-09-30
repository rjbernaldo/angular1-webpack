var request = require('request');
var express = require('express');
var showdown = require('showdown');
var converter = new showdown.Converter();

var app = express();

app.use(express.static(__dirname + '/dist'));


app.get('/github/:username', function(req, res) {
  var username = req.params.username;
  request({
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: { 'User-Agent': 'rjbernaldo' }
  }, function(error, response, body) {
    var repos = JSON.parse(body);
    
    repos = repos.map(function(repo) {
      return {
        id: repo.id,
        name: repo.name
      }
    });
    
    res.send({
      repos: repos
    });
  });
});

app.get('/github/:username/:repo', function(req, res) {
  var username = req.params.username;
  var repo = req.params.repo;
  
  request({
    url: 'https://api.github.com/repos/' + username + '/' + repo + '/readme',
    headers: { 'User-Agent': 'rjbernaldo' }
  }, function(error, response, body) {
    var url = JSON.parse(body).download_url;
    request({
      url: url,
      headers: { 'User-Agent': 'rjbernaldo' }
    }, function(error, response, body) {
      res.send({
        readme: converter.makeHtml(body)
      })
    });
  });
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(8080);
