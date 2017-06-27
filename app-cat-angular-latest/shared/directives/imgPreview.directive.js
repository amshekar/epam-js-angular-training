(function (app) {
    "use strict"
    app.directive('imgPreview', function () {
        return {
            restrict: 'E',
            scope: {
                url: '=imgUrl'
            },
            template: '<div ng-form="imgPreviewForm">' +
            '<div class="form-group" ng-class="{ \'has-error\' : imgPreviewForm.url.$invalid && !imgPreviewForm.url.$pristine }">' +
                '<label>Url</label>' + '<input type="text" name="url" class="form-control" ng-model="url" required>' +
                '<p ng-show="imgPreviewForm.url.$invalid && !imgPreviewForm.url.$pristine" class="help-block">cat url is not valid.</p>' +
            '</div>' +
            '<div class="form-group" ng-hide="imgPreviewForm.url.$invalid">' +
                '<label>Preview</label>' + '<img class="catimg" ng-src={{url}} alt="cat"></img>' +
            '</div></div>'
        }
    });
})(angular.module("myApp"));