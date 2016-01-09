angular.module('evolApp', [])

.controller('navCtrl', ['$scope', function ($scope) {

  $scope.status = {
    intro: true,
    services: false,
    partners: false,
    fees: false,
    contacts: false
  };

  $scope.changeStatus = function (currentKey) {
    var keys = Object.keys($scope.status);
    keys.forEach(function (key) {
      $scope.status[key] = false;
    });
    $scope.status[currentKey] = true;
  };

}]);
