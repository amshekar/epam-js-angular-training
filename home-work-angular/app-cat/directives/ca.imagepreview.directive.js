(function (module) {
    'use strict';


    function imagePreview() {
        return {
            restrict: 'EA',
            scope: {
                catUrl: '=catUrl',
                catObj: '=catObj'
            },
            templateUrl: './partials/image-preview.html',
        }
    };
    
    module.directive('imagePreview', imagePreview);
}(angular.module('catapp')));