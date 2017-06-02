(function (angular) {
    "use strict";

    angular.module("catapp")
        .config(config);



    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("about", {
                url: "/",
                template: '<p>EPAM Angular Training tasks 1.0</p>'
                // templateUrl: "about/about.html",
                // controller: "AboutController",
                // controllerAs: "vm"
            })
            .state("login", {
                url: "/login",                
                templateUrl: '/partials/partial.login.html',
                controller: 'LoginCtrl'
                // controllerAs: "vm"
            })
            .state("signup", {
                url: "/signup",
                templateUrl: '/partials/partial.signup.html',
                controller: 'SignupCtrl'
                // controllerAs: "vm"
            })
            .state("logout", {
                url: "/logout",
                template: null,
                controller: 'LogoutCtrl'
                // controllerAs: "vm"
            })
            .state("votecat", {
                url: "/vote",
                resolve: {
                    catresult: ['voteCatService',
                        function (voteCatService) {
                            return voteCatService.GetCats();
                        }]
                },
                templateUrl: "votecat/vote-cat.html",
                controller: "VoteCatController",
                controllerAs: 'vm'
            })
            // Edit goat state
            .state('catbyid', {
                url: '/vote/:id',
                resolve: {
                    cats: function () { return []; },
                    cat: ['$stateParams', 'voteCatService',
                        function ($stateParams, voteCatService) {

                            return voteCatService.getCat($stateParams.id);
                        }]
                },
                templateUrl: '...',
                controller: 'VoteCatController',
                controllerAs: 'vm'
            })
            .state("premiumcat", {
                url: "/premium",
                templateUrl: "premiumcat/premium-cat.html",
                controller: "PremiumCatController",
                controllerAs: "vm"
            });;
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }

})(angular);