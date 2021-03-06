import _ from "lodash"

class Controller {
  constructor($state, $stateParams, repositoriesService) {
    this.$state = $state
    this.$stateParams = $stateParams
    this.repositoriesService = repositoriesService
    this.selectedRepo = null
  }

  showIssues(repo) {
    if (repo != this.repo) {
      this.repo = repo
      this.$state.go("repositories.detail", {repoId: repo.id}, {})
    }
  }
}

export default [
  '$state', '$stateParams', 'RepositoriesService', Controller
]
