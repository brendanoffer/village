'use strict';

/**
 * @ngdoc overview
 * @name maglia
 * @description
 * # magia
 *
 * Main module of the application.
 */
angular
  .module('maglia', [
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
      templateUrl: 'views/members.html',
      controller: 'MembersCtrl as membersCtrl'
    })
    .when('/team', {
      templateUrl: 'views/members.html',
      controller: 'MembersCtrl as membersCtrl'
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

