class WorkspacesService {
  constructor($state) {
    this.$state = $state
    this.workspaces = [
      {
        initialState: 'repositories',
        name: 'Repositories',
        icon: 'google_plus'
      },
      {
        initialState: 'settings',
        name: 'Settings',
        icon: 'hangouts'
      }
    ]
    this.selectWorkspace()
  }

  selectWorkspace (workspace) {
    let selectedWorkspace = workspace
    if (selectedWorkspace == undefined) {
      selectedWorkspace = this.workspaces[0]
    }

    this.activeWorkspace = selectedWorkspace;
    setTimeout(() => {
      this.$state.go(this.activeWorkspace.initialState)
    })
  }
}

export default ['$state', WorkspacesService]
