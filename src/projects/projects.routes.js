export default function routes($stateProvider) {
  $stateProvider
    .state('app.projects', {
      url: '/:username',
      template: require('./projects.html'),
      controller: 'ProjectsController',
      controllerAs: 'vm'
    });
}

routes.$inject = ['$stateProvider'];
