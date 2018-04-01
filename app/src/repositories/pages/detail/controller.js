import CreateIssueDialog from './dialog.createIssue'

class Controller {
  constructor($state, $stateParams, $mdDialog, repositoriesService) {
    this.$state = $state
    this.$stateParams = $stateParams
    this.$mdDialog = $mdDialog
    this.repositoriesService = repositoriesService
  }

  reloadIssues() {
    this.$state.reload("repositories.detail")
  }

  //https://stackoverflow.com/questions/35516262/how-to-handle-dialogs-in-angular-component-based-architecture
  displayIssueForm(ev) {
    this.$mdDialog.show(CreateIssueDialog({
      repo: this.repo
    }, ev)).then(issueForm => {
      return this.repositoriesService.createIssue(this.repo, issueForm).then(() => {
        setTimeout(() => this.reloadIssues())
      })
    })
  }
}

export default [
  '$state', '$stateParams', '$mdDialog', 'RepositoriesService', Controller
]
