//need to refractor h-w-1 section 3
(function(module) {
  "use strict";

  function catClick3Controller() {
    var vm = this;
    vm.cats = [{
      name: 'cat1',
      url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426'

    }, {
      name: 'cat2',
      url: 'http://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',

    }, {
      name: 'cat3',
      url: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg'

    }, {
      name: 'cat4',
      url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',

    }, {
      name: 'cat5',
      url: 'http://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'

    }];

    vm.selectedOne = null;
    vm.totalclicks = 0;
    vm.cat = vm.cats[0];
    vm.cat1Clik = 0;
    vm.cat2Clik = 0;
    vm.selectedCat = selectedCat;

    function selectedCat(item) {
      vm.selectedOne = item;
      vm.selectedCatClicks = 0;
    };

    vm.selecteCatClick = selecteCatClick;

    function selecteCatClick() {
      vm.selectedCatClicks++;
      vm.totalclicks++;
    };


    vm.clickCount1 = clickCount1;

    function clickCount1() {
      vm.cat1Clik++;
    };
    vm.clickCount2 = clickCount2;

    function clickCount2() {
      vm.cat2Clik++;
    }

  }
  catClick3Controller.$inject = [];
  module.controller("catClick3Controller", catClick3Controller);

})(angular.module("catclick"));