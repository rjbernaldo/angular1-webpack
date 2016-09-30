export default function routes($stateProvider) {
  $stateProvider
    .state('app', {
      abstract: true,
      template: require('./app.html')
    });
}

routes.$inject = ['$stateProvider'];
