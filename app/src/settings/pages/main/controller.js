class Controller {
  constructor($state, $stateParams, settingsService) {
    this.$state = $state
    this.$stateParams = $stateParams
    this.settingsService = settingsService
  }

  onInit() {
  }
}

export default [
  '$state', '$stateParams', 'SettingsService', Controller
];
