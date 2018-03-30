class SettingsService {
  constructor($q, $timeout, $http, config) {
    this.$q = $q
    this.$timeout = $timeout
    this.$http = $http
    this.config = config
  }
}

export default ['$q', '$timeout', '$http', 'config', SettingsService];
