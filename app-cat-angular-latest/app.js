(function () {
    "use strict"

    angular.module('myApp', ['ui.router', 'ngMockE2E', 'ngStorage', 'catUser', 'catView']);


    angular.module('myApp').run(['$httpBackend', '$rootScope', '$state', 'currentObj',
        function ($httpBackend, $rootScope, $state, currentObj) {
            $httpBackend.whenGET('about/about.html').passThrough();
            $httpBackend.whenGET('shared/menubar.html').passThrough();

            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams, options) {
                    if (toState.data.authenticate) {
                        if (!currentObj.isAuthenticated) {
                            event.preventDefault();
                            $state.go('cat');
                        }
                    } 
                    else if (currentObj.isAuthenticated && toState.name == "cat.user.login") {
                        $rootScope.$emit('userLogout');
                        event.preventDefault();
                    }
                });
        }]);

    angular.module('myApp').value('currentObj', {
        isAuthenticated: false,
        user: {},
        catDb: [{
            id: 0,
            name: 'cat1',
            url: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/138.jpg',
            hasViewed: false,
            voteCount: 0
        }, {
            id: 1,
            name: 'cat2',
            url: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg',
            hasViewed: false,
            voteCount: 0
        }, {
            id: 2,
            name: 'cat3',
            url: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg',
            hasViewed: false,
            voteCount: 0
        }, {
            id: 3,
            name: 'cat4',
            url: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg',
            hasViewed: false,
            voteCount: 0
        }, {
            id: 4,
            name: 'cat5',
            url: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg',
            hasViewed: false,
            voteCount: 0
        }]
    });

})();