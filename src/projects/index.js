import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './projects.routes';
import ProjectsController from './projects.controller';

export default angular.module('app.projects', [uirouter])
  .config(routes)
  .controller('ProjectsController', ProjectsController)
  .name;
