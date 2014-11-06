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
        $scope.activeOrderDate = getTodaysOrders();

        function getTodaysOrders(){
            for(var index in $scope.orderDates){
                if($scope.orderDates[index].date.toDateString() === today){
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

        $scope.isTodaysOrder = function(){
            return $scope.activeOrderDate.date.toDateString() === today;
        };

        $scope.add = function(){
            $scope.activeOrderDate.orders.push($scope.newItem);
            $scope.newItem = {};
        };

  });
