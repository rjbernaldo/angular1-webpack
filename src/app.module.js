const MODULE_NAME = 'app';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';
import routes from './app.routes';

import Home from './home';
import Projects from './projects';
import ProjectDetails from './projectdetails'

import Factories from './factories';

angular.module(MODULE_NAME, [uirouter, Home, Projects, ProjectDetails, Factories])
  .config(config)
  .config(routes);

export default MODULE_NAME;
