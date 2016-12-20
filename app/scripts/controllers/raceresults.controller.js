'use strict';

/**
 * @ngdoc function
 * @name village.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Village
 */
angular.module('maglia')
  .controller('RaceResultsCtrl', function () {
    var vm = this;

    //vm.races = [
    //  {
    //    label: "Green Mountain Stage 4",
    //    type: 'cycling',
    //    imageUrl: "/images/greenmountain-stage-4.jpg",
    //    description: "The last stage of the Green Mountain Stage Race.",
    //    races: [{
    //      category:'3',
    //      riders: [{name: "Rory O'neill", place: "43", resultsLink: "https://www.road-results.com/race/8231"}]
    //    }],
    //    resultsUrl: "https://www.road-results.com/race/8231",
    //    date: "9/5/16"
    //  },
    //  {
    //    label: "Green Mountain Stage 3",
    //    type: 'cycling',
    //    imageUrl: "/images/greenmountain-stage-3.jpg",
    //    description: "The queen stage of the Green Mountain Stage Race.",
    //    races: [{
    //      category:'3',
    //      riders: [{name: "Rory O'neill", place: "2" resultsLink: "https://www.road-results.com/race/8229"}]
    //    }],
    //    resultsUrl: "https://www.road-results.com/race/8229",
    //    date: "9/4/16"
    //  },
    //  {
    //    label: "Green Mountain Stage 2",
    //    type: 'cycling',
    //    imageUrl: "/images/greenmountain-stage-2.jpg",
    //    description: "The second stage of the Green Mountain Stage Race.",
    //    races: [{
    //      category:'3',
    //      riders: [{name: "Rory O'neill", place: "15" resultsLink: "https://www.road-results.com/race/8228"}]
    //    }],
    //    resultsUrl: "https://www.road-results.com/race/8228",
    //    date: "9/3/16"
    //  },
    //  {
    //    label: "Green Mountain Stage 1",
    //    type: 'cycling',
    //    imageUrl: "/images/greenmountain-stage-1.jpg",
    //    description: "The first stage and timetrial of the Green Mountain Stage Race.",
    //    races: [{
    //      category:'3',
    //      riders: [{name: "Rory O'neill", place: "10" resultsLink: "https://www.road-results.com/race/8227"}]
    //    }],
    //    resultsUrl: "https://www.road-results.com/race/8227",
    //    date: "9/2/16"
    //  },
    //  {
    //    label: "Lucarelli & Castaldi Race Series Round 6",
    //    type: 'cycling',
    //    imageUrl: "/images/16/lucarelli-round-6.jpg",
    //    description: "The last race in the LC race series. ",
    //    races: [{
    //      category:'3',
    //      riders: [
    //        {name: "Rory O'neill", place: "37" resultsLink: "https://www.usacycling.org/results/index.php?permit=2016-1273"},
    //      ]
    //    },
    //    {
    //      category:'4',
    //      riders: [
    //        {name: "Nick Baker", place: "27" resultsLink: "https://www.usacycling.org/results/index.php?permit=2016-1273"},
    //        {name: "Chris Cheetham", place: "14" resultsLink: "https://www.usacycling.org/results/index.php?permit=2016-1273"},
    //        {name: "Brendan Offer", place: "2" resultsLink: "https://www.usacycling.org/results/index.php?permit=2016-1273"},
    //      ]
    //    }
    //    ],
    //    resultsUrl: "https://www.road-results.com/race/8143",
    //    date: "8/14/16"
    //  },
    //  {
    //    label: "Aetna Tokeneke Classic Road Race",
    //    type: 'cycling',
    //    imageUrl: "/images/16/tokeneke.jpg",
    //    description: "Aetna Tokeneke Classic Road Race",
    //    races: [{
    //      category:'3',
    //      riders: [
    //        {name: "Rory O'neill", place: "9" resultsLink: "https://www.road-results.com/race/8143"},
    //      ]
    //    },
    //    {
    //      category:'4',
    //      riders: [
    //        {name: "Nick Baker", place: "7" resultsLink: "https://www.road-results.com/race/8143#r121654"}
    //      ]
    //    }
    //    ],
    //    resultsUrl: "https://www.road-results.com/race/8143",
    //    date: "8/14/16"
    //  },
    //  {
    //    label: "The Jersey Devil",
    //    type: 'cycling',
    //    imageUrl: "/images/16/jersey-devil.jpg",
    //    description: "",
    //    races: [{
    //      category:'3',
    //      riders: [{name: "Rory O'neill", place: "7" resultsLink: "https://www.road-results.com/race/8058#r113146"}]
    //    }],
    //    resultsUrl: "https://www.road-results.com/race/8058#r113146",
    //    date: "8/7/16"
    //  },
    //  {
    //    label: "Tour of the Hilltowns",
    //    type: 'cycling',
    //    imageUrl: "/images/16/hilltowns.jpg",
    //    description: "",
    //    races: [{
    //      category:'3',
    //      riders: [{name: "Rory O'neill", place: "6" resultsLink: "https://www.road-results.com/race/7916#r113146"}]
    //    }],
    //    resultsUrl: "https://www.road-results.com/race/7916#r113146",
    //    date: "7/23/16"
    //  },
    //
    //  {
    //    label: "Pass It Along Triathlon",
    //    imageUrl: "/images/pass-it-along-16.jpg",
    //    description: undefined,
    //    resultsUrl: "http://compuscore.com/cs2016/july/piaind.htm",
    //    date: "7/23/16"
    //  },
    //  {
    //    label: "Wyckoff Triathlon",
    //    imageUrl: "/images/wyckoff-16.jpg",
    //    description: undefined,
    //    resultsUrl: "http://www.compuscore.com/cs2016/june/wyckind.htm",
    //    date: "6/18/16"
    //  },
    //  {
    //    label: "Rev3 Quassy Olympic",
    //    imageUrl: "/images/rev3_quassy.jpg",
    //    description: undefined,
    //    resultsUrl: "http://triregistration.com/TriResultsNew.php?raceid=1560",
    //    date: "6/4/16"
    //  },
    //  {
    //    label: "Bear Mountain Classic",
    //    imageUrl: "/images/bear_mtn_classic.jpg",
    //    description: undefined,
    //    resultsUrl: "https://www.road-results.com/race/7404#r113731",
    //    date: "5/8/16"
    //  },
    //  {
    //    label: "Lucarelli & Castaldi Cup #2",
    //    imageUrl: "/images/lc.jpg",
    //    description: undefined,
    //    resultsUrl: "https://www.road-results.com/race/7347#r113731",
    //    date: "4-24-16"
    //  },
    //  {
    //    label: "March Madness Duathlon",
    //    imageUrl: "/images/march-mad-16.jpg",
    //    description: undefined,
    //    resultsUrl: "http://prtiming.com/marchmadness-2016results",
    //    date: "4-3-16"
    //  },
    //  {
    //    label: "NYC Half Marathon",
    //    imageUrl: "/images/nyc-half-16.jpg",
    //    description: undefined,
    //    resultsUrl: "http://web2.nyrrc.org/cgi-bin/htmlos.cgi/87119.2.766834701232303836",
    //    date: "3-20-16"
    //  },
    //  {
    //    label: "Grant's Tomb Crit",
    //    imageUrl: "/images/grants-tomb-16.jpg",
    //    description: undefined,
    //    resultsUrl: "https://www.road-results.com/race/7032#r113731",
    //    date: "3-12-16"
    //  }
    //
    //];

  });
