angular.module('application').controller('HomePageController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  $scope.data = new Array();
  $scope.data[0] = [30, 45, 60, 90];
}]);
