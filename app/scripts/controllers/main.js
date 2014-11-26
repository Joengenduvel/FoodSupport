'use strict';

/**
 * @ngdoc function
 * @name foodSupportApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodSupportApp
 */
angular.module('foodSupportApp')
  .controller('MainCtrl', function ($scope) {
        var today = new Date().toDateString();

        $scope.newItem = {};

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
                        name: 'beleg',
                        isBoolean: false,
                        values: ['martino','kaas en hesp', 'brie']
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

        $scope.orderDates = [
            {
                date: new Date(2014,5,30),
                orders: [
                    {
                        name: 'Hans',
                        description: 'Soep',
                        price: 1.7
                    },
                    {
                        name: 'Glenn',
                        description: 'Broodje zalm bruin smos',
                        price: 1.7
                    },
                    {
                        name: 'Benny',
                        description: 'Broodje tonijn',
                        price: 1.7
                    }
                ]
            },
            {
                date: new Date(2014,11,1),
                orders: [
                    {
                        name: 'Robby',
                        description: 'Soep',
                        price: 1.7
                    },
                    {
                        name: 'Tom',
                        description: 'Broodje zalm bruin smos',
                        price: 1.7
                    },
                    {
                        name: 'Nele',
                        description: 'Broodje tonijn',
                        price: 1.7
                    }
                ]
            },
            {
                date: new Date(2014,11,4),
                orders: [
                    {
                        name: 'Robby',
                        description: 'Soep',
                        price: 1.7
                    },
                    {
                        name: 'Tom',
                        description: 'Broodje zalm bruin smos',
                        price: 1.7
                    },
                    {
                        name: 'Nele',
                        description: 'Broodje tonijn',
                        price: 1.7
                    }
                ]
            }
        ];

        this.getTodaysOrders = function (){
            for(var index in $scope.orderDates){
                if($scope.orderDates.hasOwnProperty(index) && $scope.orderDates[index].hasOwnProperty('date') && $scope.orderDates[index].date.toDateString() === today){
                    return $scope.orderDates[index];
                }
            }
            var newOrderDate = {
                date: new Date(),
                orders: []
            };
            $scope.orderDates.push(newOrderDate);
            return newOrderDate;
        };


        $scope.activeOrderDate = this.getTodaysOrders();

        $scope.isTodaysOrder = function(){
            return $scope.activeOrderDate.date.toDateString() === today;
        };

        function generateDescription(selectedFood) {
            var description = selectedFood.name;
            for(var index = 0; index < selectedFood.options.length; index++){
                if(selectedFood.options[index].isBoolean) {
                    //just write the name if the value is true
                    if (selectedFood.options[index].value === true) {
                        description += ' ' + selectedFood.options[index].name;
                    }

                }else{
                    //just print the value
                    description += ' ' + selectedFood.options[index].value;

                }
            }
            return description;
        }

        $scope.add = function(){
            $scope.newItem.description = generateDescription($scope.newItem.selectedFood);
            $scope.activeOrderDate.orders.push($scope.newItem);
            $scope.newItem = {};
        };

  });
