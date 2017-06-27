(function (module) {
    'use strict';


    function voteSpinner() {
        return {
            restrict: 'EA',
            scope: {
                catVote: '=',
                catObj: '='
            },
            templateUrl: './partials/vote-spinner.html',
        }
    };

    module.directive('voteSpinner', voteSpinner);
}(angular.module('catapp')));
