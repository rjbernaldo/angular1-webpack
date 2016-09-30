import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './projectdetails.routes';
import ProjectDetailsController from './projectdetails.controller';

export default angular.module('app.projectdetails', [uirouter])
  .config(routes)
  .controller('ProjectDetailsController', ProjectDetailsController)
  .name;