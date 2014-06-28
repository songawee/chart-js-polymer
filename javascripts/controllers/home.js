angular.module('application').controller('HomePageController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  $scope.data = new Array();
  $scope.data[0] = [40, 19, 10, 80];
}]);
