'use strict';

/**
 * @ngdoc function
 * @name foodSupportApp.controller:FoodctrlCtrl
 * @description
 * # FoodctrlCtrl
 * Controller of the foodSupportApp
 */
angular.module('foodSupportApp')
    .controller('FoodCtrl', function ($scope, foodService) {
        $scope.food = foodService.getFoodList();

        $scope.addFood = function () {
            $scope.food.push($scope.newFood);
            $scope.newFood = {
                options: []
            };
            console.log(foodService.getFoodList());
        };

        $scope.newFood = {
            options: []
        };
    });
