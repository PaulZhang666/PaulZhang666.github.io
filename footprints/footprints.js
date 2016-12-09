'use strict';

var app = angular.module('myApp.footprints', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/footprints', {
    templateUrl: 'footprints/footprints.html',
    controller: 'footprintCtrl'
  });
}]);

app.controller('footprintCtrl', ['$scope', footprintCtrl]);

function footprintCtrl($scope){
    var eleOne = document.getElementsByClassName('header-background')[0];
    var eleTwo = document.getElementsByClassName('header-background-2')[0];

    //eleOne.classList.add('sec_0');

    $scope.showUp = function() {
        eleOne.classList.add('up');
        eleTwo.classList.add('up');
    };

    $scope.a = "aaa";

}
