export default class ProjectDetailsController {
  constructor($state, $stateParams, Projects, $sce) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.Projects = Projects;
    this.username = this.$stateParams.username;
    this.repo = this.$stateParams.repo;
    
    this.Projects.getDetails({
      username: this.username,
      repo: this.repo
    }, (res) => {
      this.readme = $sce.trustAsHtml(res.readme);
    });
  }
}

ProjectDetailsController.$inject = ['$state', '$stateParams', 'Projects', '$sce'];