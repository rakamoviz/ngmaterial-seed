import controller from './controller'
export default {
  name : 'workspacesList',
  config : {
    bindings : { workspaces: '<', activeWorkspace : '<', activateWorkspace : '&onSelected' },
    controller : controller,
    templateUrl : 'src/workspaces/components/list/template.html'
  }
}