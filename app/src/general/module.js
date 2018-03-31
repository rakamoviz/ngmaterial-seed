import _ from 'lodash'
import angular from 'angular'
import * as services from './services'
import * as pages from './pages'
import routes from './routes'
import helper from '../helper'

let GeneralModule = angular.module('general', ['ngMaterial', 'ui.router'])

_.forEach(services, (serviceClass, serviceName) => {
	GeneralModule.service(serviceName, serviceClass)
})

_.forEach(pages, (pageDefinition) => {
	GeneralModule.component(pageDefinition.name, pageDefinition.config)
})

GeneralModule.config(['$stateProvider', '$urlRouterProvider',
	($stateProvider, $urlRouterProvider) => {
    routes.states.forEach(state => $stateProvider.state(helper.augmentState(state)))
	}
])

export default GeneralModule