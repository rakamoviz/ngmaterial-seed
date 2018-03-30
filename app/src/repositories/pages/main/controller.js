class Controller {
  constructor($state, $stateParams, repositoriesService) {
    this.$state = $state
    this.$stateParams = $stateParams
    this.repositoriesService = repositoriesService
  }

  onInit() {
    this.repositoriesService.getRepositories().then(
      repositories => this.repositories = repositories
    )
  }
}

export default [
  '$state', '$stateParams', 'RepositoriesService', Controller
];
