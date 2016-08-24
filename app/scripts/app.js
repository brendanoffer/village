'use strict';

/**
 * @ngdoc overview
 * @name brendanofferApp
 * @description
 * # brendanofferApp
 *
 * Main module of the application.
 */
angular
  .module('brendanofferApp', [
    'ngAnimate',
    'ngMaterial',
    'ngRoute'
  ]).config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('indigo');

  $routeProvider
    .when('/', {
      templateUrl: 'views/results.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'MainCtrl'
    })
    .when('/results', {
      templateUrl: 'views/results',
      controller: 'MainCtrl'
    })
    .when('/analytics', {
      templateUrl: 'views/visualizations.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

});
;
