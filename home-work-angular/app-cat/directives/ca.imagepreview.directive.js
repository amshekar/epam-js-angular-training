(function (module) {
    'use strict';


    function imagePreview() {
        return {
            restrict: 'EA',
            scope: {
                catUrl: '=',
                catObj: '='
            },
            templateUrl: './partials/image-preview.html',
        }
    };
    
    module.directive('imagePreview', imagePreview);
}(angular.module('catapp')));