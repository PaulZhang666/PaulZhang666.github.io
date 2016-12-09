/**
 * Created by FuriosA on 28/11/2016.
 */

var app = angular.module('myApp.startPage', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/startPage', {
        templateUrl: 'startPage/startPage.html',
        controller: 'startPageCtrl'
    });
}]);

app.controller('startPageCtrl', ['$scope', startPageCtrl]);

function startPageCtrl($scope){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    //var pRatio = window.devicePixelRatio || 1;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var floating = 90,
        point,
        r = 0;
    //canvas.width = width * pRatio;
    //canvas.height = height * pRatio;
    canvas.width = width;
    canvas.height = height;
    ctx.globalAlpha = 0.7;
    //transparency
    $scope.iteration = function(){
        ctx.clearRect(0, 0, width, height);
        point = [{x:0, y:height * 0.7 + floating},
            {x:0, y:height * 0.7 -floating}];
        while(point[1].x < width + floating){
            $scope.draw(point[0], point[1]);
        }
    };
    $scope.draw = function(point_0, point_1){
        ctx.beginPath();
        ctx.moveTo(point_0.x, point_0.y);
        ctx.lineTo(point_1.x, point_1.y);
        var next_x = point_1.x + (Math.random()*2-0.25)*floating;
        var next_y = $scope.calY(point_1.y);
        ctx.lineTo(next_x, next_y);
        ctx.closePath();
        r += 1/25 * Math.PI;
        ctx.fillStyle = $scope.calColor(r);
        ctx.fill();
        point[0] = point[1];
        point[1] = {x:next_x, y:next_y};
    };
    $scope.calY = function(y){
        var next_y = y + (Math.random()*2 - 1.3)*floating;
        return (next_y > height || next_y < 0)?$scope.calY(y):next_y;
    };
    $scope.calColor = function(r){
        return '#' + ((Math.sin(r) * 107 + 148) << 16 |
            (Math.sin(r + 2/3 * Math.PI) * 107 + 148) << 8 |
            (Math.sin(r + 4/3 * Math.PI) * 107 + 148)).toString(16);
    };
    document.onclick = $scope.iteration;
    document.ontouchstart = $scope.iteration;
    $scope.iteration();

    $scope.nextPage = function(num){
        PageTransitions.init.nextPage();
    }
}