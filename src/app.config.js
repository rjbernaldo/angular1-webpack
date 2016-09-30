export default function config($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$urlRouterProvider', '$locationProvider'];
