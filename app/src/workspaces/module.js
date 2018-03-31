import _ from 'lodash'
import angular from 'angular'
import 'angular-ui-router'
import * as components from './components'
import * as services from './services'

let WorkspacesModule = angular.module('workspaces', ['ngMaterial', 'ui.router'])

_.forEach(services, (serviceClass, serviceName) => {
  WorkspacesModule.service(serviceName, serviceClass)
})

_.forEach(components, (componentDefinition) => {
  WorkspacesModule.component(componentDefinition.name, componentDefinition.config)
})

export default WorkspacesModule