(function (app) {
    "use strict";
    app.controller('catViewerController', ['catService', 'catresults', 'currentObj', function (catService, catResults, currentObj) {
        var vm = this;
        vm.searchOrder = false;
        vm.searchResult = catResults;
        vm.orderBy = [{
            value: false,
            text: 'Ascending'
        }, {
            value: true,
            text: 'Descendig'
        }];

        vm.activeCat = {};

        vm.onLabelClick = function (cat) {
            vm.canUpdate = false;
            vm.activeCat = cat;
            cat.hasViewed = true;
            vm.activeCat.count = 0;
            if (cat.userId == currentObj.user.id) {
                vm.canUpdate = true;
            }
        }

        vm.onImageClick = function () {
            vm.activeCat.count++;
        }

        vm.voter = function (value) {
            vm.activeCat.voteCount += value;
            vm.searchResult[vm.activeCat.id].voteCount = vm.activeCat.voteCount;
        }

        vm.search = function () {
            vm.activeCat = null;
            vm.searchResult = [];
            if (vm.searchTxt) {
                catService.searchCat(vm.searchTxt).then(function (result) {
                    vm.searchResult = result;
                });
            }
        }

        vm.deleteCat = function () {
            catService.deleteCat(vm.activeCat).then(function (result) {
                if (result){
                    vm.searchResult = vm.searchResult.filter(function (obj) {
                        return obj.id != vm.activeCat.id;
                    });
                }
            });
        }

    }]);

})(angular.module('catView'))