export default function routes($stateProvider) {
  $stateProvider
    .state('app.projectdetails', {
      url: '/:username/:repo',
      template: require('./projectdetails.html'),
      controller: 'ProjectDetailsController',
      controllerAs: 'vm'
    });
}

routes.$inject = ['$stateProvider'];