class Controller {
  constructor($state, $stateParams, $auth, repositoriesService, accountService) {
    this.$state = $state
    this.$stateParams = $stateParams
    this.$auth = $auth
    this.repositoriesService = repositoriesService
  }

  onInit() {
    this.repositoriesService.getRepositories().then(
      repositories => this.repositories = repositories
    )
  }

  authenticate() {
    this.$auth.authenticate("github").then(x => {
      console.log('You have successfully signed in! ', x);
    });
  };
}

export default [
  '$state', '$stateParams', '$auth', 'RepositoriesService', 'AccountService', Controller
];
