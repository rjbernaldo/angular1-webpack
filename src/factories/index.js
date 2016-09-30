import angular from 'angular';
import ngResource from 'angular-resource';

import Projects from './projects.factory';
//import Details from './details.factory';

export default angular.module('factories', [ngResource])
  .factory('Projects', Projects)
  //.factory('Details', Details)
  .name;
