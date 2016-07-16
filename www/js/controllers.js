angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('DashCtrl', function($scope, $http) {

  var tv = localStorage.getItem('tv_choice').toLowerCase();
  var code = localStorage.getItem('remote_code');

  $scope.click = function(key) {
    var url = "http://" + tv + ".freebox.fr/pub/remote_control?code=" + code + "&key=" + key;
    try {
      $http.get(url);
    }
    catch (ex) {

    }
  }

})

.controller('AccountCtrl', function($scope) {

  $scope.config = {
    tv: localStorage.getItem('tv_choice'),
    code: localStorage.getItem('remote_code')
  };

  $scope.save = function() {
    console.log($scope.config.tv);
    console.log($scope.config.code);

    localStorage.setItem('tv_choice', $scope.config.tv);
    localStorage.setItem('remote_code', $scope.config.code);
  };
});
