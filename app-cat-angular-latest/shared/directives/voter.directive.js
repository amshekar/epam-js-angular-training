(function (app) {
    "use strict"
    app.directive('voter', function (catService) {
        function catVoter(scope, element, attr, constructor) {
            scope.voter = function (value) {
                if (scope.cat.voteCount == 0) {
                    scope.cat.voteCount += value;
                }
            }
        }
        return {
            restrict: 'E',
            scope: {
                cat: '='
            },
            template: '<div><button type="button" class="btn btn-default btn-lg" ng-click="voter(1)">' +
            '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>' +
            '</button>' +
            '<button type="button" class="btn btn-default btn-lg" ng-click="voter(-1)">' +
            '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button> </div>',
            link: catVoter
        }
    })

})(angular.module("myApp"));