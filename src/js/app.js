/**
 *
 * simple bar graph example
 *
 **/

//------Color Library
var bgdColor = '#268BD2',
    txtColor = '#EEE8D5';


var w = 400,
    h = 100,
    padding = 2,
    dataset = [5, 13, 220, 119, 77, 27, 33],
    svg1 = d3.select('#deThree')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

svg1.selectAll('rect')
    .data(dataset).enter()
    .append('rect')
    .attr('x', function(d, i) {
        return (i * (w / dataset.length));
    })
    .attr('y', function(d) {
        return h - d; //upside down hack
    })
    .attr('width', w / dataset.length - padding)
    .attr('height', function(d) {
        return d;
    });
