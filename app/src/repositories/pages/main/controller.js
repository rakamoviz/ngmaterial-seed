class Controller {
  constructor($state, $stateParams, repositoriesService) {
    this.$state = $state
    this.$stateParams = $stateParams
    this.repositoriesService = repositoriesService
  }
}

export default [
  '$state', '$stateParams', 'RepositoriesService', Controller
];
