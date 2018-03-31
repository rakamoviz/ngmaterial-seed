import * as pages from './pages'

export default {
  states: [
    {
      name : 'login',
      url  : '/login',
      reloadOnSearch : false,
      views: {
        '@': {
          component: pages.LoginPage.name
        }
      },
      params: {
      },
      resolve: {
      },
      skipIfLoggedIn: true
    }
  ]
}
