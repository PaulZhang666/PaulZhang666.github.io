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
    var background_img = document.getElementsByClassName('header-background_img')[0];
    var background_opa = document.getElementsByClassName('header-background_opa')[0];
    var title = document.getElementsByClassName('title')[0];
    var subtitle = document.getElementsByClassName('subtitle')[0];
    var content = document.getElementsByClassName('content')[0];

    //eleOne.classList.add('sec_0');

    $scope.showStartButton = true;

    $scope.showUp = function() {
        background_img.classList.add('up');
        background_opa.classList.add('up');
        title.classList.add('up');
        subtitle.classList.add('up');
        content.classList.add('up');
        $scope.showStartButton = false;
    };

    $scope.checkScore = function(){
        var result = 0;
        if($scope.Q_0 == 1){
            result += parseInt($scope.Q_0);
        }
        if($scope.Q_1 == 1){
            result += parseInt($scope.Q_1);
        }
        if($scope.Q_2 == 1){
            result += parseInt($scope.Q_2);
        }
        if($scope.Q_3 == 1){
            result += parseInt($scope.Q_3);
        }
        if($scope.Q_4 == 1){
            result += parseInt($scope.Q_4);
        }
        switch (result){
            case 0:
                $scope.result_text = "You know nothing!";
                $scope.result_score = "You got 0/5.";
                break;
            case 1:
                $scope.result_text = "Maybe next time!";
                $scope.result_score = "You got 1/5.";
                break;
            case 2:
                $scope.result_text = "You know something!";
                $scope.result_score = "You got 2/5.";
                break;
            case 3:
                $scope.result_text = "You are my friend!";
                $scope.result_score = "You got 3/5.";
                break;
            case 4:
                $scope.result_text = "Good game, well played!";
                $scope.result_score = "You got 4/5.";
                break;
            case 5:
                $scope.result_text = "You know everything!";
                $scope.result_score = "You got 5/5.";
                break;
        }
    };

    window.onscroll = function(){
        $scope.showUp();
        $scope.$apply();
    };

    var option = {
        title: {
            text: 'Provinces I Have Been Since Birth',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:[]
        },
        visualMap: {
            min: 0,
            max: 23,
            left: '10%',
            top: '350px',
            text: ['my age = 23','my age = 0'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'First visit age',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: 'Beijing',value: 0 },
                    {name: 'Tianjin',value: 21 },
                    {name: 'Shanghai',value: 22 },
                    {name: 'Chongqing',value: "" },
                    {name: 'Hebei',value: 6 },
                    {name: 'Henan',value: 21 },
                    {name: 'Yunnan',value: "" },
                    {name: 'Liaoning',value: "" },
                    {name: 'Heilongjiang',value: "" },
                    {name: 'Hunan',value: 22 },
                    {name: 'Anhui',value: "" },
                    {name: 'Shandong',value: 22 },
                    {name: 'Xinjiang',value: 20 },
                    {name: 'Jiangsu',value: "" },
                    {name: 'Zhejiang',value: "" },
                    {name: 'Jiangxi',value: "" },
                    {name: 'Hubei',value: "" },
                    {name: 'Guangxi',value: 23 },
                    {name: 'Gansu',value: 20 },
                    {name: 'Shanxi',value: "" },
                    {name: 'Neimeng',value: 1 },
                    {name: 'Shan_xi',value: 19 },
                    {name: 'Jilin',value: "" },
                    {name: 'Fujian',value: "" },
                    {name: 'Guizhou',value: "" },
                    {name: 'Guangdong',value: "" },
                    {name: 'Qinghai',value: 20 },
                    {name: 'Tibet',value: 20 },
                    {name: 'Sichuan',value: "" },
                    {name: 'Ningxia',value: "" },
                    {name: 'Hainan',value: 7 },
                    {name: 'Taiwan',value: "" },
                    {name: 'Hongkong',value: "" },
                    {name: 'Makau',value: "" }
                ]
            }
        ]
    };

    var myChart = echarts.init(document.getElementById('chinaChart'));

    myChart.setOption(option);


}
