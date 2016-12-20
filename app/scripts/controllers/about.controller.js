'use strict';

/**
 * @ngdoc function
 * @name maglia.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maglia
 */
angular.module('maglia')
  .controller('AboutCtrl', function () {
    var vm = this;

    vm.aboutMeInfo = {
      label: "Brendan Offer",
    };
  });
