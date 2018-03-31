class Controller {
  constructor($state, $stateParams, $auth, accountService) {
    this.$state = $state
    this.$stateParams = $stateParams
    this.$auth = $auth
    this.accountService = accountService
  }

  authenticate() {
    return this.$auth.authenticate("github").then(x => {
      console.log('You have successfully signed in! ', x);
      return this.accountService.getProfile()
    });
  };
}

export default [
  '$state', '$stateParams', '$auth', 'AccountService', Controller
];
