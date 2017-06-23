(function (app) {
    "use strict"

    app.service('catService', function ($q, $http, currentObj) {

        this.getCats = function () {
            return $http.get('/getCats').then(function (response) {
                return response.data;
            });
        };

        this.getCatById = function (id) {
            return $http({
                method: 'POST',
                url: '/getCatById',
                data: id                
            }).then(function (respose) {
                return respose.data;
            });
        };

        this.addUpdateCat = function(cat){
             return $http({
                method: 'POST',
                url: '/addUpdateCat',
                data: cat                
            }).then(function (respose) {
                return true;
            });
        };

        this.deleteCat = function(cat){
            return $http({
                method: 'POST',
                url: '/deleteCat',
                data: cat                
            }).then(function (respose) {
                return true;
            });
        };


        this.searchCat = function (name) {
            return $http({
                method: 'POST',
                url: '/search',
                data: {name: name}                
            }).then(function (respose) {
                return respose.data;
            });
        };
    });

})(angular.module("catView"));