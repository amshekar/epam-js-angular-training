(function (module) {

    function SignUpController(localStorage, $state, toastr) {
        var vm = this,
            usersDb,
            KEY = 'users';
        vm.signup = signup;

        usersDb = localStorage.get(KEY);
        usersDb = !usersDb ? localStorage.set(KEY, []) : usersDb;
        function signup(user) {
            usersDb.push(user);
            localStorage.set(KEY, usersDb);
            toastr.info('You have successfully created a new account and have been signed-up');
            $state.go('login');
        }

    }

    SignUpController.$inject = ['localStorageService', '$state', 'toastr'];
    module.controller("SignUpController", SignUpController);

})(angular.module("catapp"));
