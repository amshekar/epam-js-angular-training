(function (module) {
    "use strict";
    function LoginController(catService, $cookies, $state, $log, toastr) {
        var vm = this;
        vm.login = login;

        function login(user) {
            catService.AuthenticateUserPromise(user).then(function (response) {
                if (response) {
                    $cookies.put('user', JSON.stringify(response));
                    $state.go('about');
                    toastr.info('You have successfully Loged in');
                }
            });
           
        }
    }

    LoginController.$inject = ["voteCatService", "$cookies", "$state", "$log","toastr"];
    module.controller("LoginController", LoginController);

})(angular.module("catapp"));