class RepositoriesService {
  constructor($q, $timeout, $http, config) {
    this.$q = $q
    this.$timeout = $timeout
    this.$http = $http
    this.config = config
  }

  getRepositories() {
    return Promise((resolve, reject) => {
      resolve([
        {name: "repo 1"}
      ])
    })
  }
}

export default ['$q', '$timeout', '$http', 'config', RepositoriesService];
