import * as pages from './pages'

export default {
  states: [
    {
      name : 'settings_main',
      url  : '/settings/main',
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
