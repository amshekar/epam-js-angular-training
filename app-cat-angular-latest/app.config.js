(function (app) {
    "use strict"
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('cat', {
                url: '/',
                views: {
                    'menubar': { templateUrl: "shared/menubar.html" },
                    '': { templateUrl: "about/about.html" }
                },
                data: { authenticate: false }
            }).state('cat.user', {
                views: { 'mainContainerView@': { templateUrl: 'user/user.html' } },
                data: { authenticate: false }
            }).state('cat.view', {
                views: { 'mainContainerView@': { templateUrl: 'cat/cat.html' } },
                data: { authenticate: true }
            });

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

    });

})(angular.module("myApp"));