import angular from "angular"

export default (locals, ev) => ({
  locals, // will be bound to the controller instance!
  templateUrl: 'src/repositories/pages/detail/template.createIssue.html',
  bindToController: true,
  controllerAs: '$ctrl',
  controller: function($mdDialog) {
    // this.foo = ..will be provided in locals as an input parameter..
    // this.onSave = () { ..will be provided as output parameter.. }
    this.labels = ["bug", "duplicate", "enhancement", "invalid", "question", "wontfix"]
    this.issueForm = {}

    this.cancel = () => {
      $mdDialog.cancel()
    }

    this.hide = function() {
      console.log("hide")
      $mdDialog.hide()
    }

    this.cancel = function() {
      $mdDialog.cancel()
    }

    this.answer = function() {
      $mdDialog.hide(this.issueForm)
    }
  },
  parent: angular.element(document.body),
  targetEvent: ev,
  clickOutsideToClose: true,
  fullscreen: true
})