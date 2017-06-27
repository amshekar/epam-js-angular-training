(function (module) {
    
    function userController(userService, $state, $rootScope) {
        var vm = this;
        vm.user = {};
        vm.login = function () {
            userService.validateUser(vm.user).then(function (response) {
                if (response) {
                    $rootScope.$broadcast('userLoggedIn');
                    $state.go('cat.view.all');
                } else {
                    $state.go('cat');
                }
            });
        };

        vm.signup = function () {
            userService.register(vm.user).then(function (response) {
                if (response) {
                    $rootScope.$broadcast('userLoggedIn');
                    $state.go('cat.view.all');
                } else {
                    $state.go('cat');
                }
            });
        };
    }
    
    userController.$inject = ['userService', '$state', '$rootScope'];
    module.controller("userController", userController);
})(angular.module('catUser'));