(function (app) {

    app.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('cat.view.all', {
                url: 'view',
                views: {
                    'catContainer@cat.view': {
                        templateUrl: 'cat/views/search.html',
                        controller: 'catViewerController as ctrl'
                    }
                },
                resolve: {
                    catresults: ['catService', function (catService) {
                        return catService.getCats();
                    }]
                }
            }).state('cat.view.add', {
                url: 'add',
                views: {
                    'catContainer@cat.view': { templateUrl: 'cat/views/add.html' }
                }
            }).state('cat.view.update', {
                url: 'update/:id',
                views: {
                    'catContainer@cat.view': { templateUrl: 'cat/views/add.html' }
                }
            });
        }
    ]);

})(angular.module('catView'));