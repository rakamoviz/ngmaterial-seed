import controller from './controller'

export default {
  name : 'repositoriesDetailPage',
  config : {
    templateUrl: 'src/repositories/pages/detail/template.html',
    controller : controller,
    bindings   : {
      profile: "<", repo: "<", issues: "<"
    }
  }
}
