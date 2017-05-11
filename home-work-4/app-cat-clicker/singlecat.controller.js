//h-w-1 section 1
(function(module) {
  "use strict";
  module.controller("catController", ["$scope", function($scope) {
    var vm = this;
    vm.count = 0;

    vm.catClick = catClick;

    function catClick() {
      vm.count++;
    }


  }]);


})(angular.module("catclick"));