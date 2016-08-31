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
        label: "Team",
        subsections: [
          {
            label: "Members",
            url: '#/members'
          },
          {
            label: "Race Results",
            url: '#/results'
          },
          {
            label: "Photos",
            url: '#/photos'
          }
        ]
      },
      {
        label: "Info",
        subsections: [
          {
            label: "About",
            url: '#/about'
          },
          {
            label: "Contact",
            url: '#/contact'
          }
        ]
      }
    ];

  });
