/**
 * Main App Controller for the AngularJS Material Starter App
 * @param $mdSidenav
 * @constructor
 */
class AppController {
  constructor($mdSidenav, $auth, $state, workspacesService) {
    this.$mdSidenav = $mdSidenav
    this.$auth = $auth
    this.$state = $state
    this.workspacesService = workspacesService
  }

  toggleWorkspacesList() {
    this.$mdSidenav('left').toggle();
  }

  get workspaces() {
    return this.workspacesService.workspaces
  }

  get activeWorkspace() {
    return this.workspacesService.activeWorkspace
  }

  isLoggedIn() {
    return this.$auth.isAuthenticated()
  }

  logout() {
    return this.$auth.logout().then(() => {
      this.$state.go("login")
    })
  }

  selectWorkspace(workspace) {
    this.workspacesService.selectWorkspace(workspace)
  }
}

export default [ '$mdSidenav', '$auth', '$state', 'WorkspacesService', AppController ];
