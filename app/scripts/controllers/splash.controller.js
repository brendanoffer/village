'use strict';

/**
 * @ngdoc function
 * @name brendanofferApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the brendanofferApp
 */
angular.module('brendanofferApp')
  .controller('SplashCtrl', function ($scope,$timeout,QueueService) {
    var INTERVAL = 3000;
    var vm = this;

    vm.slides = [{id:"image00", src:"./images/wyckoff-16.jpg"},
      {id:"image01", src:"./images/bear_mtn_classic.jpg"},
      {id:"image02", src:"./images/grants-tomb-16.jpg"},
      {id:"image03", src:"./images/lc.jpg"},
      {id:"image04", src:"./images/march-mad-16.jpg"}];


    $scope.$on('queueProgress', function(event, queueProgress) {
      $scope.$apply(function(){
        vm.progress = queueProgress.progress * 100;
      });
    });
    $scope.$on('queueComplete', function(event, slides) {
      $scope.$apply(function(){
        vm.slides = slides;
        vm.loaded = true;
        $timeout(nextSlide, INTERVAL);
      });
    });

    function setCurrentSlideIndex(index) {
      $scope.currentIndex = index;
    }
    function isCurrentSlideIndex(index) {
      return $scope.currentIndex === index;
    }
    function nextSlide() {
      $scope.currentIndex = ($scope.currentIndex < vm.slides.length - 1) ? ++$scope.currentIndex : 0;
      $timeout(nextSlide, INTERVAL);
    }
    function loadSlides() {
      QueueService.loadManifest(vm.slides);
    }
    $scope.currentIndex = 0;

    vm.progress =0;
    vm.loaded = false;
    $scope.setCurrentSlideIndex = setCurrentSlideIndex;
    $scope.isCurrentSlideIndex = isCurrentSlideIndex;

    // Initialize the flow
    loadSlides();


  });
