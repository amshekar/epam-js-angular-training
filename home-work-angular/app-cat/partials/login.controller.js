angular.module('catapp')
    .controller('LoginCtrl', function ($scope, $location,toastr, $state, Account) {
        $scope.login = function () {
            //$auth.login($scope.user)
            //    .then(function () {
            //        Account.getProfile()
            //            .then(function (response) {
            //                $state.go('home');
            //                toastr.success('You have successfully signed in!');
            //            })
            //    })
            //    .catch(function (error) {
            //        toastr.error(error.data.message, error.status);
            //    });
        };


    });
