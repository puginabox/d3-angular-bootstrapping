/**
 *
 * Main application controller
 *
 **/

(function() { //----- Protect the Queen, protect the Queen!
    console.log('2 - Main Controller is ready...');
    // 'use strict';


    angular
        .module('myApp')
        .controller('MainCtrl', ['$scope', '$interval',
            function($scope, $interval) {

                var time = new Date('2014-01-01 00:00:00 +0100');
                // Random data point generator
                var randPoint = function() {
                    var rand = Math.random;
                    return {
                        time: new Date(time.toString()),
                        visitors: rand() * 100
                    };
                }


                // We store a list of logs
                $scope.logs = [randPoint()];
                $scope.moreLogs = [
                    [randPoint()],
                    [randPoint()],
                    [randPoint()],
                    [randPoint()]
                ];

                $interval(function() {

                    time.setSeconds(time.getSeconds() + 1);

                    $scope.logs.push(randPoint());
                    $scope.moreLogs[0].push(randPoint());
                    $scope.moreLogs[1].push(randPoint());
                    $scope.moreLogs[2].push(randPoint());
                    $scope.moreLogs[3].push(randPoint());

                }, 1000);
            }
        ]);

})(); // end of SIAF (Self Invoking Anonymous Function), of IIFE for the purists... ;-)
