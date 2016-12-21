'use strict';

/**
 * @ngdoc function
 * @name village.controller:MembersCtrl
 * @description
 * # MembersCtrl
 * Controller of the Village
 */
angular.module('maglia')
  .controller('MembersCtrl', function () {
    var vm = this;


    vm.members = [
      {
        id: "1",
        name: "Rory O'neill",
        motto: "",
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/12930768_704805212992642_875457573_n.jpg?ig_cache_key=MTIzMzY1MDI2NzI3NTYwMjYxMA%3D%3D.2",
        instagram: 'https://www.instagram.com/1roryoneill/'
      },
      {
        id: "2",
        name: "Nick Baker",
        motto: "",
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/13827458_854556464680957_1523103945_n.jpg?ig_cache_key=MTMxNjk5MDc4OTk1OTYzODExNQ%3D%3D.2",
        instagram: "https://www.instagram.com/nicholaspbaker/"
      },
      {
        id: "3",
        name: "Patrick Wilson",
        motto: "Negronis.",
        imageUrl: "images/patrick.jpg",
        instagram: "https://www.instagram.com/juan_chimpo/"
      },
      {
        id: "4",
        name: "Chris Bowie",
        motto: ".",
        imageUrl: "images/bowie.jpg",
        instagram: "https://www.instagram.com/bowieonabike/"
      },
      {
        id: "5",
        name: "Chris Cheetham",
        motto: "Hill workouts in PP are the best",
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14723496_173068883150630_3945934072861163520_n.jpg?ig_cache_key=MTM2NzYxMzMzNjM5NjY1NTYzMQ%3D%3D.2",
        instragram: "https://www.instagram.com/ccheets/",
      },
      {
        id: "7",
        name: "Michael Heuff",
        motto: "",
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14709691_365985360406502_365273465147621376_n.jpg?ig_cache_key=MTM3MjU5NjQ5NjE4NTA3ODQ0OA%3D%3D.2",
        instragram: "",
      }, {
        id: "6",
        name: "Edward Hammond",
        motto: "I like shiny things",
        imageUrl: "/images/hammond.jpg",
        instragram: "",
      },
      {
        id: "8",
        name: "Brendan Offer",
        motto: "",
        imageUrl: "images/brendan.jpg",
        instragram: "https://www.instagram.com/thebofferman/",
      },
      {
        id: "9",
        name: "Jimmy The Hawk",
        motto: "",
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14032759_1143286919063261_871907007_n.jpg?ig_cache_key=MTMzMDUwNTg0MDU0OTI3OTAxOQ%3D%3D.2",
        instragram: "https://www.instagram.com/jh4g08/",
      },
      {
        id: "10",
        name: "John Tattersal",
        motto: "",
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14478526_174502476335632_1951788479679561728_n.jpg?ig_cache_key=MTM2MTk1Mzc1NjAwMzQyNTc1MA%3D%3D.2  ",
        instragram: "https://www.instagram.com/jt85_/",
      }
    ];


  });
