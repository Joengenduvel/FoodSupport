'use strict';

angular.module('foodSupportApp').directive('foodEditor', function () {
    return {
        restrict: 'A',
        templateUrl: 'views/templates/foodEditor.html',
        scope: {
            foodEditorItem: '=item',
            newOptionValue: '='
        },
        link: function (scope) {
            scope.addOption = function () {
                scope.foodEditorItem.options.push(scope.newOption);
                scope.newOption = {};

            };
        }
    };
});