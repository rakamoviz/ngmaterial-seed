import _ from 'lodash'
import angular from 'angular'
import 'angular-ui-router'
import * as services from './services'
import * as pages from './pages'
//import * as components from './components'
import routes from './routes'

let RepositoriesModule = angular.module('monitoring', ['ngMaterial', 'ui.router'])

_.forEach(services, (serviceClass, serviceName) => {
	RepositoriesModule.service(serviceName, serviceClass)
})

_.forEach(pages, (pageDefinition) => {
	RepositoriesModule.component(pageDefinition.name, pageDefinition.config)
})

/*
_.forEach(components, (componentDefinition) => {
	RepositoriesModule.component(componentDefinition.name, componentDefinition.config)
})
*/

RepositoriesModule.config(['$stateProvider', '$urlRouterProvider',
	($stateProvider, $urlRouterProvider) => {
		routes.states.forEach((state) => $stateProvider.state(state))
	}
])

export default RepositoriesModule
