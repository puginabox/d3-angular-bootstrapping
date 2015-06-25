/**
 *
 * simple bar graph example
 *
 **/

d3.select('body')
    .append('rect')
    .attr('width', 20)
    .attr('height', 100)
    .style('background', '#EEE8D5');

//------Color Library
var bgdColor = '#268BD2',
    txtColor = '#EEE8D5';


var w = 200,
    h = 100,
    padding = 2,
    dataset = [5, 13, 20, 19, 7],
    svg1 = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

svg1.selectAll('rect')
    .data(dataset).enter()
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 20)
    .attr('height', 100);

// .attr('x', function(d, i) {
//     return (i * (w / dataset.length));
// })
// .attr('y', 0)
// .attr('width', w / dataset.length - padding)
// .attr('height', h);
