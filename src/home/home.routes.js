export default function routes($stateProvider) {
  $stateProvider
    .state('app.home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'vm'
    });
}

routes.$inject = ['$stateProvider'];
