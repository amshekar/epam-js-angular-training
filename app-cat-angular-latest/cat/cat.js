(function () {
    angular.module('catView', []);
    angular.module('catView').run(function ($httpBackend, $localStorage, currentObj) {
        var catsDb = $localStorage.catsDb;
        $httpBackend.whenGET('cat/cat.html').passThrough();
        $httpBackend.whenGET('cat/views/add.html').passThrough();
        $httpBackend.whenGET('cat/views/search.html').passThrough();

        $httpBackend.whenGET('/getCats').respond(function () {
            return [200, getCatsFromDb(), {}];
        });

        function getCatsFromDb() {
            var cats = [];
            if ($localStorage.catsDb) {
                cats = $localStorage.catsDb;
            }
            return cats;
        }

        $httpBackend.when('POST', '/deleteCat').respond(function (type, url, data) {
            var cat = JSON.parse(data),
                catsDb = getCatsFromDb();
            $localStorage.catsDb = catsDb.filter(function (obj) {
                return obj.id != cat.id;
            });
            return [200, true, {}];
        });


        $httpBackend.when('POST', '/getCatById').respond(function (type, url, data) {
            var catsDb = getCatsFromDb();

            var cat = catsDb.filter(function (obj) {
                return obj.id == data;
            })[0];
            return [200, cat, {}];
        });

        $httpBackend.when('POST', '/search').respond(function (type, url, data) {
            var catsDb = getCatsFromDb(),
                searchStr = JSON.parse(data),
                cats = [];

            if (searchStr.name) {
                cats = catsDb.filter(function (obj) {
                    return obj.name.toLowerCase().indexOf(searchStr.name.toLowerCase()) > -1;
                });
            }
            return [200, cats, {}];
        });


        $httpBackend.when('POST', '/addUpdateCat').respond(function (type, url, data) {
            var cat = JSON.parse(data),
                catsDb = getCatsFromDb(),
                isUpdate = false;
            if (cat.id) {

                catsDb.map(function (catObj) {
                    if (catObj.id == cat.id && !isUpdate) {
                        catObj.name = cat.name;
                        catObj.url = cat.url;
                        isUpdate = true;
                    }
                });
            } else {
                catsDb.push({
                    id: new Date().getTime(),
                    userId: currentObj.user.id,
                    name: cat.name,
                    url: cat.url,
                    hasViewed: false,
                    voteCount: 0
                });
            }
            $localStorage.catsDb = catsDb;
            return [200, true, {}];
        });

    });
})();