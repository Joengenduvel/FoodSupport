'use strict';

/**
 * @ngdoc function
 * @name foodSupportApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the foodSupportApp
 */
angular.module('foodSupportApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
