'use strict';

/**
 * @ngdoc service
 * @name appApp.food
 * @description
 * # food
 * Service in the appApp.
 */
angular.module('foodSupportApp')
  .service('foodService', function () {
    var food = [
        {
            name: 'broodje',
            options: [
                {
                    name: 'brood',
                    isBoolean: false,
                    values: ['bruin', 'fitness', 'wit']
                },
                {
                    name: 'smos',
                    isBoolean: true,
                    values: [true, false]
                }
            ]
        },
        {
            name: 'soep',
            options: [
                {
                    name: 'extra brood',
                    isBoolean: true,
                    values: [true, false]
                }
            ]
        }
    ];
        this.getFoodList = function(){
            return food;
        };
  });
