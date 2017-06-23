(function (app) {

    app.controller('catAddController', ['$state', '$stateParams', 'catService'
        , function ($state, $stateParams, catService) {
            var vm = this,
                catId = $stateParams.id;

            vm.cat = {};

            if (catId) {
                catService.getCatById(catId).then(function (cat) {
                    vm.cat = cat;
                });
            }

            vm.submit = function (isValid) {
                if (isValid) {
                    catService.addUpdateCat(vm.cat).then(function (isAdded) {
                        if (isAdded) {
                            alert("Cat added successfully");
                            $state.go('cat.view.all');
                        } else {
                            alert("Failed to add cat");
                        }
                    });
                } else {
                    alert("Form Not Valid");
                }
            };

            vm.clear = function () {
                $state.go('cat.view.all');
            }
        }]);

})(angular.module("catView"))