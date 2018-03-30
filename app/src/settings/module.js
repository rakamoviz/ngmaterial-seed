import _ from 'lodash'
import angular from 'angular'
import 'angular-ui-router'
import * as services from './services'
import * as pages from './pages'
//import * as components from './components'
import routes from './routes'

let SettingsModule = angular.module('settings', ['ngMaterial', 'ui.router'])

_.forEach(services, (serviceClass, serviceName) => {
	SettingsModule.service(serviceName, serviceClass)
})

_.forEach(pages, (pageDefinition) => {
	SettingsModule.component(pageDefinition.name, pageDefinition.config)
})

/*
_.forEach(components, (componentDefinition) => {
	SettingsModule.component(componentDefinition.name, componentDefinition.config)
})
*/

SettingsModule.config(['$stateProvider', '$urlRouterProvider',
	($stateProvider, $urlRouterProvider) => {
		routes.states.forEach((state) => $stateProvider.state(state))
	}
])

export default SettingsModule
