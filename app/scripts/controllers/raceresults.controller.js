'use strict';

/**
 * @ngdoc function
 * @name brendanofferApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the brendanofferApp
 */
angular.module('brendanofferApp')
  .controller('RaceResultsCtrl', function () {
    var vm = this;

    vm.races = [
      {
        label: "Pass It Along Triathlon",
        imageUrl: "/images/pass-it-along-16.jpg",
        description: undefined,
        resultsUrl: "http://compuscore.com/cs2016/july/piaind.htm",
        date: "7/23/16"
      },
      {
        label: "Wyckoff Triathlon",
        imageUrl: "/images/wyckoff-16.jpg",
        description: undefined,
        resultsUrl: "http://www.compuscore.com/cs2016/june/wyckind.htm",
        date: "6/18/16"
      },
      {
        label: "Rev3 Quassy Olympic",
        imageUrl: "/images/rev3_quassy.jpg",
        description: undefined,
        resultsUrl: "http://triregistration.com/TriResultsNew.php?raceid=1560",
        date: "6/4/16"
      },
      {
        label: "Bear Mountain Classic",
        imageUrl: "/images/bear_mtn_classic.jpg",
        description: undefined,
        resultsUrl: "https://www.road-results.com/race/7404#r113731",
        date: "5/8/16"
      },
      {
        label: "Lucarelli & Castaldi Cup #2",
        imageUrl: "/images/lc.jpg",
        description: undefined,
        resultsUrl: "https://www.road-results.com/race/7347#r113731",
        date: "4-24-16"
      },
      {
        label: "March Madness Duathlon",
        imageUrl: "/images/march-mad-16.jpg",
        description: undefined,
        resultsUrl: "http://prtiming.com/marchmadness-2016results",
        date: "4-3-16"
      },
      {
        label: "NYC Half Marathon",
        imageUrl: "/images/nyc-half-16.jpg",
        description: undefined,
        resultsUrl: "http://web2.nyrrc.org/cgi-bin/htmlos.cgi/87119.2.766834701232303836",
        date: "3-20-16"
      },
      {
        label: "Grant's Tomb Crit",
        imageUrl: "/images/grants-tomb-16.jpg",
        description: undefined,
        resultsUrl: "https://www.road-results.com/race/7032#r113731",
        date: "3-12-16"
      }

    ];

  });
