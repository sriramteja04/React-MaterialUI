import React, { Component } from 'react';
import * as d3 from 'd3';

class ScatterGraph extends Component {
    constructor(props) {
        super(props);
        this.scatterPlot = React.createRef();
    }

    margin = { top: 10, right: 100, bottom: 30, left: 30 };
    width = 1400 - this.margin.left - this.margin.right;
    height = 400 - this.margin.top - this.margin.bottom;

    row = (d, allGroup) => {
        // Reformat the data: we need an array of arrays of {x, y} tuples
        return allGroup.map(function(grpName) {
            // .map allows to do something for each element of the list
            return {
                name: grpName,
                values: d.map(function(d) {
                    return { time: d.time, value: +d[grpName] };
                }),
            };
        });
    };

    componentDidMount() {
        // append the svg object to the body of the page
        var svg = d3
            .select(this.scatterPlot.current)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

        //Read the data
        d3.csv(
            'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv'
        ).then(data => {
            // List of groups (here I have one group per column)
            var allGroup = ['valueA', 'valueB', 'valueC'];

            data = this.row(data, allGroup);

            // A color scale: one color for each group
            var myColor = d3
                .scaleOrdinal()
                .domain(allGroup)
                .range(d3.schemeSet2);

            // Add X axis --> it is a date format
            var x = d3
                .scaleLinear()
                .domain([0, 10])
                .range([0, this.width]);
            svg.append('g')
                .attr('transform', 'translate(0,' + this.height + ')')
                .call(d3.axisBottom(x));

            // Add Y axis
            var y = d3
                .scaleLinear()
                .domain([0, 20])
                .range([this.height, 0]);
            svg.append('g').call(d3.axisLeft(y));

            // Add the lines
            var line = d3
                .line()
                .x(function(d) {
                    return x(+d.time);
                })
                .y(function(d) {
                    return y(+d.value);
                });
            svg.selectAll('myLines')
                .data(data)
                .enter()
                .append('path')
                .attr('d', function(d) {
                    return line(d.values);
                })
                .attr('stroke', function(d) {
                    return myColor(d.name);
                })
                .style('stroke-width', 2)
                .style('fill', 'none');

            // Add the points
            svg
                // First we need to enter in a group
                .selectAll('myDots')
                .data(data)
                .enter()
                .append('g')
                .style('fill', function(d) {
                    return myColor(d.name);
                })
                // Second we need to enter in the 'values' part of this group
                .selectAll('myPoints')
                .data(function(d) {
                    return d.values;
                })
                .enter()
                .append('circle')
                .attr('cx', function(d) {
                    return x(d.time);
                })
                .attr('cy', function(d) {
                    return y(d.value);
                })
                .attr('r', 7)
                .attr('stroke', 'white');
        });
    }

    render() {
        return (
            <svg
                width={this.width + this.margin.left + this.margin.right}
                height={this.height + this.margin.top + this.margin.bottom}
                className={'graph'}
                ref={this.scatterPlot}
            >
                {/*<g transform = {`translate(${this.margin.left},${this.margin.right})`} >*/}

                {/*</g>*/}
            </svg>
        );
    }
}

export default ScatterGraph;
