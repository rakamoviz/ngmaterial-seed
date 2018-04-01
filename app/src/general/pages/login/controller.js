class Controller {
  constructor($state, $stateParams, $auth, accountService, workspacesService) {
    this.$state = $state
    this.$stateParams = $stateParams
    this.$auth = $auth
    this.accountService = accountService
    this.workspacesService = workspacesService
  }

  authenticate() {
    return this.$auth.authenticate("github").then(
      () => this.workspacesService.selectWorkspace()
    )
  }
}

export default [
  '$state', '$stateParams', '$auth', 'AccountService', 'WorkspacesService', Controller
]
