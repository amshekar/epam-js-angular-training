(function (module) {
    'use strict';

    function voteSpinner($http) {
        return {
            restrict: 'A',
            link: function (scope, elem) {
                scope.isLoading = isLoading;

                scope.$watch(scope.isLoading, toggleElement);

                ////////

                function toggleElement(loading) {
                    if (loading) {
                        elem.show();
                    } else {
                        elem.hide();
                    }
                }

                function isLoading() {
                    return $http.pendingRequests.length > 0;
                }
            }
        };
    }

    voteSpinner.$inject = ['$http'];


    module.directive('voteSpinner', voteSpinner);
}(angular.module('catapp')));