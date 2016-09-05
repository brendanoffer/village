
'use strict';

/**
 * @ngdoc function
 * @name village.controller:MembersCtrl
 * @description
 * # MembersCtrl
 * Controller of the Village
 */
angular.module('brendanofferApp')
  .controller('MembersCtrl', function () {
    var vm = this;

    vm.members = [{
      id:"1",
      name: "Rory O'neill",
      motto:"I Like Bikes."
      imageUrl: "/images/members/rory-oneill.jpg"
    },{
      id:"2",
      name: "Nick Baker",
      motto:"I'm a hardass."
      imageUrl: "/images/members/nick-baker.jpg"
    },
    {
      id:"3",
      name: "Patrick Wilson",
      motto:"Negronis."
      imageUrl: "/images/members/patrick-wilson.jpg"
    },
    {
      id:"4",
      name: "Chris Bowie",
      motto:".",
      imageUrl: "/images/members/chris-bowie.jpg"
    },
    {
      id:"5",
      name: "Chris Cheetham",
      motto:"Hill workouts in PP are the best",
      imageUrl: "/images/members/chris-cheetham.jpg"
    },
    {
      id:"6",
      name: "Edward Hammond",
      motto:"I like shiny things",
      imageUrl: "/images/members/ed-hammond.jpg"
    },
    {
      id:"7",
      name: "Matt Lee",
      motto:"",
      imageUrl: "/images/members/matt-lee.jpg"
    }];

  });
