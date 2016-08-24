'use strict';

/**
 * @ngdoc function
 * @name brendanofferApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the brendanofferApp
 */
angular.module('brendanofferApp')
  .controller('AboutCtrl', function () {
    var vm = this;

    vm.aboutMeInfo = {
      label: "Brendan Offer",
    };
  });
