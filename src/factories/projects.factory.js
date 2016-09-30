export default function ProjectsFactory($resource) {
  var url = 'github/:username';
  var params = { username: '@username', repo: '@repo' };
  var actions = { 
    query: { 
      method: 'GET'
    },
    getDetails: {
      method: 'GET',
      url:  'github/:username/:repo'
    }
  };

  return $resource(url, params, actions);
}

ProjectsFactory.$inject = ['$resource'];
