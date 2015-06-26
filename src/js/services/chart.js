/**
 *
 *  Chart Factory Service Module 
 *
 **/
(function() { //----- Protect the Queen, protect the Queen!
    console.log('3 - Chart Factory Service is standing by...');
    'use strict';

    angular
        .module('myChart', []) // don't forget dependency array here!
        .factory('d3', function() { // D3 Library Factory

            /* We could declare locals or other D3.js
               specific configurations here. */

            return d3;
        });
})(); // end of SIAF (Self Invoking Anonymous Function), of IIFE for the purists... ;-)
