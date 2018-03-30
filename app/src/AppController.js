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
    setTimeout(() => {
      this.$state.go(this.activeWorkspace.states.initial.name)
    })
    
  }

  toggleWorkspacesList() {
    this.$mdSidenav('left').toggle();
  }

  selectWorkspace ( workspace ) {
    this.activeWorkspace = workspace;
  }
}

export default [ '$state', '$mdSidenav', AppController ];
