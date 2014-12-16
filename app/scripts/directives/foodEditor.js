'use strict';

angular.module('foodSupportApp').directive('foodEditor', function () {
    return {
        restrict: 'A',
        templateUrl: 'views/templates/foodEditor.html',
        scope: {
            foodEditorItem: '=item'
        },
        link: function (scope) {
            scope.addOption = function (newOption) {
                newOption.values = [];
                scope.foodEditorItem.options.push(newOption);
            };
        }
    };
});