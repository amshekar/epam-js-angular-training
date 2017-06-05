(function (module) {
    "use strict";
    function SignUpController(localStorageService, $cookies, $log) {
        var vm = this, userdb, KEY = 'users';
        vm.signup = signup;

        userdb = localStorageService.get(KEY);
        userdb = !userdb ? localStorageService.set(KEY, []) : userdb;

        function signup(user) {
            userdb.push(user);
            localStorageService.set(KEY, userdb);
            $state.go('login');
            //toastr.info('You have successfully created a new account and have been signed-up');
        }
    }

    SignUpController.$inject = ["localStorageService", "$cookies", "$log"];
    module.controller("SignUpController", SignUpController);

})(angular.module("catapp"));
