(function (app) {

    app.controller('menubarController', ['$state', '$rootScope', 'currentObj',
        function ($state, $rootScope, currentObj) {

            var vm = this;

            vm.logout = function () {
                currentObj.user = {};
                currentObj.isAuthenticated = false;
                vm.isLoggedIn = false;
                $state.go('cat.user.login');
            };

            $rootScope.$on('userLoggedIn', function (value) {
                vm.isLoggedIn = true;
            });

            $rootScope.$on('userLogout',function(value){
                vm.logout();
            });

        }]);

})(angular.module('myApp'));