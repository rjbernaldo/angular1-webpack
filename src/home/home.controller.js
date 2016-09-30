export default class HomeController {
  constructor($state) {
    this.$state = $state;
    this.form = {};
  }

  submitForm() {
    this.$state.go('app.projects', { username: this.form.username });
  }
}

HomeController.$inject = ['$state'];
