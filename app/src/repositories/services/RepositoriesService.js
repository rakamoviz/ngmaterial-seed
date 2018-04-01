class RepositoriesService {
  constructor($q, $timeout, $http, accountService, config) {
    this.$q = $q
    this.$timeout = $timeout
    this.$http = $http
    this.accountService = accountService
    this.config = config
  }

  getRepositories() {
    return this.accountService.getProfile().then(profile => {
      if (profile == undefined) throw "profile is null"
      console.log(this.config.github.baseUrl + "user/repos", ":", profile.github.pass.access_token)
      return this.$http.get(this.config.github.baseUrl + "user/repos", {
        headers: {
          Authorization: "Bearer " + profile.github.pass.access_token
        }
      })
    })
  }
}

export default ['$q', '$timeout', '$http', 'AccountService', 'config', RepositoriesService]
