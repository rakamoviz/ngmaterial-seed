class Controller {
  constructor($state) {
    this.$state = $state
  }

  isWorkspaceActive(workspace) {
    return this.$state.current.name.indexOf(workspace.initialState) >= 0
  }
}

export default [
  "$state", Controller
]
