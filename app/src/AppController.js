/**
 * Main App Controller for the AngularJS Material Starter App
 * @param $mdSidenav
 * @constructor
 */
class AppController {
  constructor($mdSidenav, $auth, workspacesService) {
    this.$mdSidenav = $mdSidenav
    this.$auth = $auth
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
}

export default [ '$mdSidenav', '$auth', 'WorkspacesService', AppController ];
