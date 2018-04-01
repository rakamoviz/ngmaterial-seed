class Controller {
  constructor($state, $stateParams,repositoriesService) {
    this.$state = $state
    this.$stateParams = $stateParams
    this.repositoriesService = repositoriesService
  }

  reloadIssues() {
    this.$state.reload("repositories.detail")
  }
}

export default [
  '$state', '$stateParams', 'RepositoriesService', Controller
]
