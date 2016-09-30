export default class ProjectsController {
  constructor($state, $stateParams, Projects) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.Projects = Projects;
    this.username = this.$stateParams.username;
    
    this.Projects.query({
      username: this.username
    }, (res) => {
      this.projects = res.repos;
    });
  }
}

ProjectsController.$inject = ['$state', '$stateParams', 'Projects'];
