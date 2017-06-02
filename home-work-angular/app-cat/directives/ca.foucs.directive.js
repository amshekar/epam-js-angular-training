(function (module) {
    'use strict';
    function itemFocus() {
        return {
            restrict: 'A',
            scope: {
                itemFocus: '=itemFocus'
            },
            link: function (scope, elem, attr, ctrl) {
                scope.$watch('itemFocus', focusElement);
                function focusElement(isFocusRequire) {
                    if (isFocusRequire === true) {
                        elem[0].focus();
                        isFocusRequire = false;
                    }
                }
            }
        }
    }

    module.directive('itemFocus', itemFocus);
}(angular.module('catapp')));