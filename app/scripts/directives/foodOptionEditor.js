'use strict';

angular.module('foodSupportApp').directive('foodOptionEditor', function () {
    return {
        restrict: 'A',
        templateUrl: 'views/templates/foodOptionEditor.html',
        scope: {
            foodOption: '=item'
        },
        link: function (scope) {
            scope.addOptionValue = function (newOptionValue) {
                scope.foodOption.values.push(newOptionValue);
            };
        }
    };
});