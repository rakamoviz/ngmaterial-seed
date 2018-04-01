import _ from 'lodash'
import * as pages from './pages'

export default {
  states: [
    {
      name : 'repositories',
      url  : '/repositories',
      reloadOnSearch : false,
      views: {
        '@': {
          component: pages.MainPage.name
        }
      },
      resolve: {
        repositories: RepositoriesService => RepositoriesService.getRepositories()
      },
      loginRequired: true
    },
    {
      name : 'repositories.detail',
      url  : '/{repoId}',
      reloadOnSearch : false,
      component: pages.DetailPage.name,
      params: {
      },
      resolve: {
        repo: (repositories, $stateParams) => {
          return _.find(
            repositories, repo => repo.id == $stateParams.repoId
          )
        },
        issues: (repo, RepositoriesService) => {
          return RepositoriesService.getIssues(repo)
        }
      },
      loginRequired: true
    }
  ]
}
