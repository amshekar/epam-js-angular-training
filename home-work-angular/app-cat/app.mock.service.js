(function () {
    angular.module('catapp.mockData', ['ngMockE2E']);
    angular.module('catapp').requires.push('catapp.mockData');

    angular.module('catapp.mockData').run(run);
    run.$inject = ['$httpBackend', 'voteCatService'];

    function run($httpBackend, crudFactory) {
        $httpBackend.whenGET('/partials/partial.login.html').passThrough();
        $httpBackend.whenGET('/partials/partial.signup.html').passThrough();
        $httpBackend.whenGET('/votecat/vote-cat.html').passThrough();
        $httpBackend.whenGET('./partials/image-preview.html').passThrough();
        $httpBackend.whenGET('./partials/vote-spinner.html').passThrough();




        $httpBackend.whenGET('/GetCats').respond(function () {
            return [200, voteCatService.GetCats(), {}];
        });


        $httpBackend.whenPOST('/authenticateUser').respond(function (method, url, data) {
            return [200, voteCatService.AuthenticateUser(JSON.parse(data)), {}];
        });

    }
})();