// Load libraries
import _ from 'lodash'
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-ui-router';
import 'satellizer';

import template from 'src/app.html!text'
import AppController from 'src/AppController';
import Workspaces from 'src/workspaces/module';

import * as modules from 'src/modules'
import * as config from 'src/config'

const appDependencies = [ 'ngMaterial', 'ui.router', 'satellizer', Workspaces.name ]

_.forEach(modules, (module) => {
	appDependencies.push(module.name)
})

export default angular.module( 'app', appDependencies )
  .config(($mdIconProvider, $mdThemingProvider, $authProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');

    $authProvider.github({
      url: 'http://127.0.0.1:3000/auth/github',
      clientId: '42f2b5c1e5b523bb55aa',
      authorizationEndpoint: 'https://github.com/login/oauth/authorize',
      redirectUri: window.location.origin,
      optionalUrlParams: ['scope'],
      scope: ['public_repo'],
      scopeDelimiter: ' ',
      oauthType: '2.0',
      popupOptions: { width: 1020, height: 618 }
    });
  })
  .constant("config", config)
  .controller('AppController', AppController)
  .component('body', {
    template: template,
  	controller: AppController
  })
  .config(['$stateProvider', '$urlRouterProvider', function(
    $stateProvider, $urlRouterProvider
  ) {
		//console.log($stateProvider, $urlRouterProvider)
  }]);
