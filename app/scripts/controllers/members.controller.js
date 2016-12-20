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

    vm.members = [{
      id: "1",
      name: "Rory O'neill",
      motto: "I Like Bikes.",
      imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/12930768_704805212992642_875457573_n.jpg?ig_cache_key=MTIzMzY1MDI2NzI3NTYwMjYxMA%3D%3D.2",
      instagram: 'https://www.instagram.com/1roryoneill/'
    }, {
      id: "2",
      name: "Nick Baker",
      motto: "I'm a hardass.",
      imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/13827458_854556464680957_1523103945_n.jpg?ig_cache_key=MTMxNjk5MDc4OTk1OTYzODExNQ%3D%3D.2",
      instagram: "https://www.instagram.com/nicholaspbaker/"
    },
      {
        id: "3",
        name: "Patrick Wilson",
        motto: "Negronis.",
        imageUrl: "https://www.instagram.com/p/BN4l72LgFfL/media?size=l",
        instagram: "https://www.instagram.com/juan_chimpo/"
      },
      {
        id: "4",
        name: "Chris Bowie",
        motto: ".",
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12749885_183684892002912_1096726328_n.jpg?ig_cache_key=MTE4OTkyNzU0OTE1ODUwNjg5MA%3D%3D.2",
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
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/14596706_1425668347460973_7612973843061145600_n.jpg?ig_cache_key=MTM4MDU3MTQyNDk2MzYxMzE5Mg%3D%3D.2",
        instragram: "https://www.instagram.com/thebofferman/",
      },
      {
        id: "9",
        name: "Jimmy The Hawk",
        motto: "",
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/13534059_297770027228722_1311896207_n.jpg?ig_cache_key=MTI4MDUxMTY3MDczNjgzMjEzNA%3D%3D.2",
        instragram: "https://www.instagram.com/jh4g08/",
      },
      {
        id: "10",
        name: "John Tattersal",
        motto: "",
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s320x320/14287908_174549226282300_678239867_a.jpg",
        instragram: "https://www.instagram.com/jt85_/",
      }
    ];

  });
