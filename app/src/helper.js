/**
 * Helper auth functions
 */
var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    deferred.reject();
  } else {
    deferred.resolve();
  }
  return deferred.promise;

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

function augmentState(state) {
  if (state.loginRequired) {
    state.resolve.loginRequired = loginRequired
  } else {
    delete state.resolve.loginRequired
  }

  return state
}

module.exports = {
  augmentState: augmentState
}