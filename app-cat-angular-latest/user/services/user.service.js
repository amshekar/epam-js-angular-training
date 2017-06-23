(function (app) {

    app.service('userService', ['$http', 'currentObj', function ($http, currentObj) {

        this.validateUser = function (userInfo) {
            return $http({
                method: 'POST',
                url: 'user/validateLogin',
                data: userInfo
            }).then(function (respose) {
                var isExists = false;
                if (respose.data) {
                    isExists = true;
                    currentObj.isAuthenticated = true;
                    currentObj.user = respose.data;
                } else {
                    currentObj.user = null;
                    currentObj.isAuthenticated = false;
                }
                return isExists;
            });
        };

        this.register = function (userInfo) {
            return $http({
                method: 'POST',
                url: 'user/signup',
                data: userInfo                
            }).then(function (respose) {
                currentObj.user = respose;
                currentObj.isAuthenticated = true;
                return true;
            });
        }

    }]);
})(angular.module('catUser'));