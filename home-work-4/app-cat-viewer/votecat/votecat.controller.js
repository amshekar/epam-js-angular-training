//need to refractor h-w-1 section 3
(function (module) {
    "use strict";
    function VoteCatController(voteCatService, $cookies,$log) {
        var vm = this;
        vm.cats = voteCatService.GetCats();
        vm.Allcats = vm.cats;
        vm.selectedOne = null;
        vm.totalclicks = 0;
        vm.cat = vm.cats[0];
        vm.cat1Clik = 0;
        vm.cat2Clik = 0;
        vm.votes = 0;
        vm.selectedCat = selectedCat;
        vm.upVote = upVote;
        vm.downVote = downVote;
        vm.viewed = false;
        vm.search = search;
        vm.addCat = addCat;
        vm.resetAll = resetAll;
        vm.getmycookiesback = null;

        function selectedCat(item) {
            vm.selectedOne = item;
            vm.selectedCatClicks = 0;
            vm.viewed = true;
        }

        vm.selecteCatClick = selecteCatClick;

        function selecteCatClick() {
            vm.selectedCatClicks++;
            vm.totalclicks++;
            vm.viewed = true;
        }


        vm.clickCount1 = clickCount1;

        function clickCount1() {
            vm.cat1Clik++;
        }
        vm.clickCount2 = clickCount2;

        function clickCount2() {
            vm.cat2Clik++;
        }

        function upVote() {
            vm.votes++;
            //storing and retreiving from cookie
            
            $cookies.putObject('catVotes', { 'name': 'cat', 'vote': vm.votes});
            getmycookiesback = $cookies.getObject('catVotes');
            $log.info(getmycookiesback.name);
            $log.info(getmycookiesback.vote);

        }
        function downVote() {
            vm.votes--;
        }

        function search() {
            vm.cats = _.filter(vm.Allcats,
                function (item) {
                    return searchUtil(item, vm.searchText);
                });

            if (vm.searchText == '') {
                vm.cats = vm.Allcats;
            }
            // vm.resetAll();
        }
        function searchUtil(item, toSearch) {
            /* Search Text in all 3 fields */
            return (item.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1) ? true : false;
        }
        function addCat() {           
            voteCatService.AddCat(vm.name, vm.url);
            vm.resetAll();
        }

        function resetAll() {
            vm.cats = vm.Allcats;
            vm.name = '';
            vm.url = '';

            vm.searchText = '';
        }

    }
    VoteCatController.$inject = ["voteCatService","$cookies","$log"];
    module.controller("VoteCatController", VoteCatController);

})(angular.module("catviewer"));