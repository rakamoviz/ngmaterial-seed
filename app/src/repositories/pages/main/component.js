import controller from './controller';

export default {
  name : 'repositoriesMainPage',
  config : {
    templateUrl: 'src/repositories/pages/main/template.html',
    controller : controller,
    bindings   : {
      profile: "<"
    }
  }
};
