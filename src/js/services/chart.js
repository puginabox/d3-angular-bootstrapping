/**
 *
 *  Chart Factory Service Module 
 *
 **/

console.log('3 - Chart Factory Service is standing by...');
// 'use strict';


angular
    .module('myChart')
    .factory('d3', function() { // D3 Library Factory

        /* We could declare locals or other D3.js
           specific configurations here. */

        return d3;
    });
