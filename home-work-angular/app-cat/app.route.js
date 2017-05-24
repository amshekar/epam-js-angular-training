(function (angular) {
    "use strict";

    angular.module("catapp")
        .config(config);



    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("about", {
                url: "/",
                templateUrl: "about/about.html",
                controller: "AboutController",
                controllerAs: "vm"
            })
            .state("singlecat", {
                url: "/single",
                templateUrl: "singlecat/single-cat.html",
                controller: "SingleCatController"
            })
            .state("votecat", {
                url: "/vote",
                templateUrl: "votecat/vote-cat.html",
                controller: "VoteCatController"
            })
            .state("premiumcat", {
                url: "/premium",
                templateUrl: "premiumcat/premium-cat.html",
                controller: "PremiumCatController",
                controllerAs: "vm"
            })
            .state("twocats", {
                url: "/two",
                templateUrl: "twocats/two-cats.html",
                controller: "TwoCatsController"
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }
})(angular);