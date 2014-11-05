'use strict';

/**
 * @ngdoc function
 * @name foodSupportApp.controller:FoodctrlCtrl
 * @description
 * # FoodctrlCtrl
 * Controller of the foodSupportApp
 */
angular.module('foodSupportApp')
  .controller('FoodCtrl', function ($scope) {
    $scope.food = [
        {
            name: 'broodje',
            options: [
                {
                    name: 'brood',
                    isBoolean: false,
                    values: ['bruin', 'fitness', 'wit']
                },
                {
                    name : 'smos',
                    isBoolean: true,
                    values: [true, false]
                }
            ]
        },
        {
            name: 'soep',
            options: [
                {
                    name : 'extra brood',
                    isBoolean: true,
                    values: [true, false]
                }
            ]
        }
    ];
  });
