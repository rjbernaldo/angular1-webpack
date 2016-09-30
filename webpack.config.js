'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/app.module.js'
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: '/node_modules/'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
};
