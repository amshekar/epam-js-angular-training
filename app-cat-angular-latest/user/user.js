(function () {
    angular.module('catUser', []);
    angular.module('catUser').run(function ($httpBackend, $localStorage, $q) {
        var userDb = $localStorage.userDb;
        $httpBackend.whenGET('user/user.html').passThrough();
        $httpBackend.whenGET('user/views/login.html').passThrough();
        $httpBackend.whenGET('user/views/register.html').passThrough();

        $httpBackend.whenPOST('user/validateLogin').respond(function (type, url, data) {
            var user = JSON.parse(data);
            if (userDb) {
                var data= userDb.filter(function (u) {
                    return user.email == u.email && user.password == u.password;
                })[0];
                return [200, data, {}];
            } else {
                return [200, null, {}];
            }
        });

        $httpBackend.when('POST', 'user/signup').respond(function (type, url, data) {
            var user = JSON.parse(data);
            user.id = new Date().getTime();
            if (userDb) {
                userDb.push(user);
            } else {
                $localStorage.userDb = [user];
            }
            return [200, user, {}];
        });
    });
})();