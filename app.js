'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.footprints',
  'myApp.startPage',
  'myApp.version'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/startPage'});
}]);

app.controller('mainCtrl', ['$scope', mainCtrl]);

function mainCtrl($scope){


}


