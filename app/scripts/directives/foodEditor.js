'use strict';

angular.module('foodSupportApp').directive('foodEditor', function(){
    return {
        restrict: 'A',
        templateUrl: 'views/templates/foodEditor.html',
        scope: { foodEditorItem: '=item'}
    };
});