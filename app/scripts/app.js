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
  // $mdThemingProvider.theme('default')
  //   .primaryPalette('light-green', {'default' : '#A200'})
  //   .accentPalette('indigo');
  //

  var villageMap = $mdThemingProvider.extendPalette('light-green', {
    '500': '#b8f558'
  });
  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('villageMap', villageMap);
  // Use that theme for the primary intentions
  $mdThemingProvider.theme('default')
    .primaryPalette('villageMap', {'default' : '500'});


  $routeProvider
    .when('/', {
      templateUrl: 'views/results.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'MainCtrl'
    })
    .when('/splash', {
      templateUrl: 'views/splash.html',
      controller: 'SplashCtrl'
    })
    .when('/results', {
      templateUrl: 'views/results.html',
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
