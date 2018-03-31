/**
 * Helper auth functions
 */
var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
  return new Promise((resolve, reject) => {
    if ($auth.isAuthenticated()) {
      reject(false)
    } else {
      resolve(true)
    }
  })
}];

var loginRequired = ['$state', '$auth', function($state, $auth) {
  return new Promise((resolve, reject) => {
    if ($auth.isAuthenticated() == false) {
      setTimeout(() => $state.go('login'))
    } 

    resolve(true)
  })
}];

var getProfile = ['AccountService', function(accountService) {
  return accountService.getProfile()
}];

function augmentState(state) {
  if (state.loginRequired) {
    state.resolve.loginRequired = loginRequired
    state.resolve.profile = getProfile
  } else {
    delete state.resolve.loginRequired
  }

  return state
}

module.exports = {
  augmentState: augmentState
}