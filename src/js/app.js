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

//--- color mapping function    

function colorPick(value) {
        if (value < 120) {
            return '#666';
        } else if (value > 150) {
            return '#FF0033';
        }
    }
    //---- bars setup
svg1.selectAll('rect')
    .data(dataset).enter()
    .append('rect')
    .attr('fill', function(d) {
        return colorPick(d);
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

//---------- bar labels
svg1.selectAll('text')
    .data(dataset).enter()
    .append('text')
    .text(function(d) {
        return d;
    })
    .attr({
        'text-anchor': 'middle',
        'font-size': 12,
        'fill': '#FFF',
        'x': function(d, i) { // center text within the bar
            return i * (w / dataset.length) + (w / dataset.length - padding) / 2;
        },
        'y': function(d, i) {
            return h - (d + 14);
        }
    });
