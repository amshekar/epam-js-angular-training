(function (module) {
    function voteCatService($http, $q, $location, localStorage) {
        var service = {
            GetCats: GetCats,
            AddCat: AddCat,
            GetCat: GetCat,
            AuthenticateUser: AuthenticateUser,
            validateUser: validateUser,
            AuthenticateUserPromise: AuthenticateUserPromise
        };



        var cats = [],listOfUsers=[];
        cats = [{
            name: 'oci cat',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426'

        }, {
            name: 'Bengal cat',
            url: 'http://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',

        }, {
            name: 'savannah cat',
            url: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg'

        }, {
            name: 'American Bob tail',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',

        }, {
            name: 'American Curl',
            url: 'http://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'

        },
        {
            name: 'British Shorthair',
            url: 'http://cdn2-www.cattime.com/assets/uploads/gallery/british-shorthair-cats-and-kittens/british-shorthair-cats-and-kittens-1.jpg'

        },
        {
            name: 'Persian cat',
            url: 'http://cdn1-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-8.jpg'

        }

        ];

        return service;

        function GetCats() {
            var deffered = $q.defer();
            deffered.resolve(cats);
            return deffered.promise;

        }
        function AddCat(reqName, reqUrl) {

            cats.push({ name: reqName, url: reqUrl });


        }
        function GetCat(id) {
            return $http.get('/cat/' + id);
        }
        function validateUser(userData) {
            return $http.post('/authenticateUser', userData);
        }

        function AuthenticateUserPromise(userdb) {
            var deffered = $q.defer();
            deffered.resolve(AuthenticateUser(userdb));
            return deffered.promise;
        }
        function AuthenticateUser(userdb) {          

            listOfUsers = localStorage.get('users');
            return listOfUsers.filter(function (user) {
                return user.email === userdb.email && user.password === userdb.password;
            })[0];
        }
    }

    voteCatService.$inject = ['$http', '$q', '$location', 'localStorageService'];
    module.service('voteCatService', voteCatService);
})(angular.module('catapp'));