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
      return this.$http.get(this.config.github.baseUrl + "user/repos", {
        headers: {
          Authorization: "Bearer " + profile.github.pass.access_token
        }
      }).then(response => response.data)
    })
  }

  getIssues(repo, state) {
    return this.accountService.getProfile().then(profile => {
      if (profile == undefined) throw "profile is null"
      return this.$http.get(this.config.github.baseUrl + "repos/" + repo.full_name + "/issues", {
        headers: {
          Authorization: "Bearer " + profile.github.pass.access_token
        },
        params: {
          state: state ? state : "open"
        }
      }).then(response => response.data)
    })
  }

  //https://developer.github.com/v3/issues/#create-an-issue
  createIssue(repo, issueForm) {
    return this.accountService.getProfile().then(profile => {
      if (profile == undefined) throw "profile is null"
      return this.$http.post(
        this.config.github.baseUrl + "repos/" + repo.full_name + "/issues", 
        issueForm,
        {
          headers: {
            Authorization: "Bearer " + profile.github.pass.access_token
          }
        }
      ).then(response => response.data)
    })
  }
}

export default ['$q', '$timeout', '$http', 'AccountService', 'config', RepositoriesService]
