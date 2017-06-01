//need to refractor h-w-1 section 3
(function (module) {
    "use strict";
    function PremiumCatController(premiumCatService) {
        var vm = this;
        vm.cats = premiumCatService.GetCats();       

        vm.selectedOne = null;
        vm.totalclicks = 0;
        vm.cat = vm.cats[0];
        vm.cat1Clik = 0;
        vm.cat2Clik = 0;
        vm.selectedCat = selectedCat;

        function selectedCat(item) {
            vm.selectedOne = item;
            vm.selectedCatClicks = 0;
        }

        vm.selecteCatClick = selecteCatClick;

        function selecteCatClick() {
            vm.selectedCatClicks++;
            vm.totalclicks++;
        }


        vm.clickCount1 = clickCount1;

        function clickCount1() {
            vm.cat1Clik++;
        }
        vm.clickCount2 = clickCount2;

        function clickCount2() {
            vm.cat2Clik++;
        }

    }
    PremiumCatController.$inject = ["premiumCatService"];
    module.controller("PremiumCatController", PremiumCatController);

})(angular.module("catapp"));