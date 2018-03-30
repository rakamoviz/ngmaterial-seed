/**
 * Main App Controller for the AngularJS Material Starter App
 * @param $mdSidenav
 * @constructor
 */
class AppController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav
    this.workspaces = [
      {
        states: {
          initial: {
            name: 'repositories_main'
          }
        },
        name: 'Repositories',
        icon: 'google_plus'
      },
      {
        states: {
          initial: {
            name: 'settings_main'
          }
        },
        name: 'Settings',
        icon: 'hangouts'
      }
    ]
  
    this.activeWorkspace = this.workspaces[0];
  }

  toggleWorkspacesList() {
    this.$mdSidenav('left').toggle();
  }

  selectWorkspace ( workspace ) {
    this.activeWorkspace = workspace;
  }
}

export default [ '$mdSidenav', AppController ];
