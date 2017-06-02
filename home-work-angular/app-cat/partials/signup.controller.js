angular.module('catapp')
    .controller('SignupCtrl', function ($scope, $location, toastr) {
        $scope.signup = function () {
            //$auth.signup($scope.user)
            //    .then(function (response) {
            //        $auth.setToken(response);

            //        // $state.go('home');
            //        $location.path('/home');
            //        toastr.info('You have successfully created a new account and have been signed-in');
            //    })
            //    .catch(function (response) {
            //        toastr.error(response.data.message);
            //    });
        };

    });