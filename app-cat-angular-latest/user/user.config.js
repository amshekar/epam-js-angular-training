(function (app) {
    app.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('cat.user.login', {
                url: 'login',
                views: {
                    'userContainer@cat.user': {
                        templateUrl: 'user/views/login.html',
                        controller: 'userController as ctrl'
                    }
                },
            }).state('cat.user.signup', {
                url: 'signup',
                views: {
                    'userContainer@cat.user': {
                        templateUrl: 'user/views/register.html',
                        controller: 'userController as ctrl'
                    }
                },
            });
        }
    ]);

})(angular.module('catUser'));