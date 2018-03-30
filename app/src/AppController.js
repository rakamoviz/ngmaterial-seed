/**
 * Main App Controller for the AngularJS Material Starter App
 * @param $mdSidenav
 * @constructor
 */
class AppController {
  constructor($state, $mdSidenav) {
    this.$state = $state
    this.$mdSidenav = $mdSidenav
    this.workspaces = [
      {
        initialState: 'repositories_main',
        name: 'Repositories',
        icon: 'google_plus'
      },
      {
        initialState: 'settings_main',
        name: 'Settings',
        icon: 'hangouts'
      }
    ]

    this.selectWorkspace(this.workspaces[0])
  }

  toggleWorkspacesList() {
    this.$mdSidenav('left').toggle();
  }

  selectWorkspace ( workspace ) {
    this.activeWorkspace = workspace;
    setTimeout(() => {
      this.$state.go(this.activeWorkspace.initialState)
    })
  }
}

export default [ '$state', '$mdSidenav', AppController ];
