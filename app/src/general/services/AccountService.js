class AccountService {
  constructor($http, $auth, config) {
    this.$http = $http
    this.$auth = $auth
    this.config = config
    this.profile = undefined
  }

  getProfile() {
    if (this.$auth.isAuthenticated() == false) {
      this.profile = undefined
      return Promise.resolve(this.profile)
    } else {
      if (this.profile) return Promise.resolve(this.profile)
      return this.$http.get(this.config.middleware.baseUrl + 'api/me').then(profile => {
        this.profile = profile
        return profile
      });
    }
  }
}

export default ['$http', '$auth', 'config', AccountService];
