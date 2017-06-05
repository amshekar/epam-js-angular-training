(function (module) {
    "use strict";
    function LoginController(catService,$cookies, $log) {
        var vm = this;
        vm.login = login;

        function login(user) {
            userdb.push(user);
            localStorage.set(KEY, userdb);
            $state.go('login');
            toastr.info('You have successfully created a new account and have been signed-up');
        }
    }

    LoginController.$inject = ["voteCatService", "$cookies", "$log"];
    module.controller("LoginController", LoginController);

})(angular.module("catapp"));
