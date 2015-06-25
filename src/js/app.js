/**
 *
 * simple bar graph example
 *
 **/

//------Color Library
var bgdColor = '#268BD2',
    txtColor = '#EEE8D5';

//---- SVG setup
var w = 400, // width of svg container
    h = 500, // height of svg container
    padding = 2,
    dataset = [35, 413, 100, 82, 220, 119, 377, 27, 33],
    svg1 = d3.select('#deThree').append('svg')
    .attr('width', w)
    .attr('height', h)
    .style({
        'background': bgdColor,
        'padding': '20px'
    });

//---- bars setup
svg1.selectAll('rect')
    .data(dataset).enter()
    .append('rect')
    .attr('fill', function(d) {
        return 'rgb(0, 0, ' + (d * 3) + ' )';
    })
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
