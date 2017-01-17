'use strict';

/**
 * @ngdoc function
 * @name village.controller:MembersCtrl
 * @description
 * # MembersCtrl
 * Controller of the Village
 */
angular.module('maglia')
  .controller('SidenavCtrl', function ($scope, $mdSidenav, $timeout, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };

    var vm = this;


    vm.menuOptions = [
      {
        label: "Team",
        uri: "#!/team"
      },
      {
        label: "Results",
        uri: "https://www.road-results.com/team/39297"
      },
      {
        label: "About",
        uri: "#!/about"
      },
      {
        label: "Shop",
        uri: "http://www.magliarosanyc.com"
      },
      {
        label: "Instagram",
        uri: "https://www.instagram.com/magliarosanycracing/",
        icon: "instagram"
      },
      {
        label: "Facebook",
        uri: "https://www.facebook.com/TeamVillageRacing",
        icon: "facebook"
      }
    ]

  });
