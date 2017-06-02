angular.module('catapp')
    .factory('Account', function ($http) {
        //var API_URL = 'http://localhost:3000';
        var API_URL = 'http://fontservice.azurewebsites.net';
        return {
            getProfile: function () {
                return $http.get(API_URL + '/api/me');
            },
            updateProfile: function (profileData) {
                return $http.put(API_URL + '/api/me', profileData);
            },
            getFont: function () {
                return $http.get(API_URL + '/api/fonts');
            },
            getAllProfiles: function () {
                return $http.get(API_URL + '/api/users');
            },
        };
    });