//h-w-1 section 1
(function (module) {
    "use strict";
    function SingleCatController() {
        var vm = this;
        vm.count = 0;
        vm.catClick = catClick;

        function catClick() {
            vm.count++;
        }

    }
    SingleCatController.$inject = [];
    module.controller("SingleCatController", SingleCatController);


})(angular.module("catclick"));