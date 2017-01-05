var app = angular.module('myApp', ['ngAnimate']);

app.controller('myCtrl', function ($scope) {
  $scope.backgroundState= "background-image gray";
  $scope.headerState= "name-header pink hover";
  $scope.menuState = "menu hide";
});
