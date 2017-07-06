var app = angular.module('app', ['ngMaterial']);

app.controller('appController', function($scope, $http, $window) {
  $scope.hide = true;
  $scope.cors = 'https://cors-anywhere.herokuapp.com/';
  $scope.getInfo = function(info) {
    $scope.hide = false;
    $scope.get = $scope.cors + 'https://www.ukr.net/news/dat/' + info + '/1/';
    $http.get($scope.get)
    .then(function(response) {
        $scope.hide = true;
        $scope.news = response.data.tops;        
    });
  }
  
  $scope.goLink = function(data) {
    console.log(data);
    $window.open(data);
  }
  
  $scope.hours = function(time) {
    var date = new Date(time * 1000);
    var hours = '';
    var minutes = '';
    if (date.getHours() < 10) {
      hours = '0' + date.getHours();
    } else {
      hours = date.getHours();
    }
    if (date.getMinutes() < 10) {
      minutes = '0' + date.getMinutes();
    } else {
      minutes = date.getMinutes();
    }
    return hours + ':' + minutes; 
  }
});