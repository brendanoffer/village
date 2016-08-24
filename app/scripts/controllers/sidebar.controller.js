'use strict';

/**
 * @ngdoc function
 * @name brendanofferApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the brendanofferApp
 */
angular.module('brendanofferApp')
  .controller('SideBarCtrl', function ($scope) {
    var vm = this;

    vm.sections = [
      {
        label: "Athletics",
        subsections: [
          {
            label: "Race Results",
            url: '/results'
          },
          {
            label: "Photos",
            url: '/photos'
          },
          {
            label: "Visual Analytics",
            url: '#/analytics'
          }
        ]
      },
      {
        label: "Info",
        subsections: [
          {
            label: "About me",
            url: '/about'
          },
          {
            label: "Contact",
            url: '/contact'
          }
        ]
      }
    ];

  });
