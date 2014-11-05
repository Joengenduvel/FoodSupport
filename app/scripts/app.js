'use strict';

/**
 * @ngdoc overview
 * @name foodSupportApp
 * @description
 * # foodSupportApp
 *
 * Main module of the application.
 */
angular
  .module('foodSupportApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
