// Load the custom app ES6 modules
import WorkspacesList from './components/list/component';

// Define the AngularJS 'features' module

export default angular
  .module("workspaces", ['ngMaterial'])
  .component(WorkspacesList.name, WorkspacesList.config);
