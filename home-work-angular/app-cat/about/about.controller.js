//h-w-1 section 1
(function (module) {
    "use strict";
    function AboutController() {
        var vm = this;
        vm.about = "Wel Come to EPAM Angular Assignment";

    }
    module.controller("AboutController", AboutController);


})(angular.module("catapp"));