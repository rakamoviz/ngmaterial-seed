import * as pages from './pages'

export default {
  states: [
    {
      name : 'settings',
      url  : '/settings',
      reloadOnSearch : false,
      views: {
        '@': {
          component: pages.MainPage.name
        }
      },
      params: {
      },
      resolve: {
      }
    }
  ]
}
