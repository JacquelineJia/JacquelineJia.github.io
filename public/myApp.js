var app = angular.module('myApp', ['ngAnimate']);

app.controller('myCtrl', function ($scope, $http) {
  $scope.backgroundState= "background-image grayscale";
  $scope.headerState= "name-header pink hover";
  $scope.menuState = "menu hid transition";

  var refresh = function() {
    $http.get('/commentlist').then(function(response) {
      // console.log(response.data);
      $scope.commentlist = response.data;
      $scope.comment = null;
    });
  };

  refresh();

  $scope.addComment = function() {
    $http.post('/commentlist', $scope.comment).then(function(response) {
      // console.log(response);
      refresh();
    });
  };

  $scope.commentName = '';
  $scope.commentComment = '';
  $scope.addCommentMessage = '';

  $scope.addCommentFull = function() {
    if ($scope.commentName == '' || $scope.commentComment == '') {
      $scope.addCommentMessage = 'Name and Comment cannot be empty';
    } else {
      $scope.addCommentMessage = 'There are no more comment spots available at this time, please try again later (when Jacqueline sets up a server).';
    }
  };

});
