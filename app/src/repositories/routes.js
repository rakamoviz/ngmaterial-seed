import * as pages from './pages'

export default {
  states: [
    {
      name : 'repositories_main',
      url  : '/repositories/main',
      reloadOnSearch : false,
      views: {
        '@': {
          component: pages.MainPage.name
        }
      },
      params: {
      },
      resolve: {
        repositories: RepositoriesService => RepositoriesService.getRepositories()
      },
      loginRequired: true
    }
  ]
}
