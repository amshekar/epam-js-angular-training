//h-w-1 section 2
(function(module) {
  "use strict";

  function catClick2Controller() {
    var vm = this;
    vm.cat1Clik = 0;
    vm.cat2Clik = 0;
    vm.clickCount1 = clickCount1;
    vm.clickCount2 = clickCount2;

    function clickCount1() {
      vm.cat1Clik++;
    }

    function clickCount2() {
      vm.cat2Clik++;
    }

  }

  catClick2Controller.$inject = [];
  module.controller("catClick2Controller", catClick2Controller);

})(angular.module("catclick"));