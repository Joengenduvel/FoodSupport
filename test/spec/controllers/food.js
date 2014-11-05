'use strict';

describe('Controller: Foodctrl', function () {

  // load the controller's module
  beforeEach(module('foodSupportApp'));

  var Foodctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Foodctrl = $controller('FoodCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of food items to the scope', function () {
    expect(scope.food.length).toBe(2);
  });
});
