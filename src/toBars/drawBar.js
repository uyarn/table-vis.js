'use strict';

import * as d3 from 'd3';

const drawLine=(data,focusIndex)=>{
   let width=200,
       height=200;
   let svg = d3.select('.tabular')
    .append("svg")
    .attr("width", width)
    .attr("height", height);

    let padding = {left:5, right:5, top:5, bottom:5};
    // xScale
    let xScale = d3.scalePoint()
    .domain(d3.range(data.length))
    .range([0, width - padding.left - padding.right]);
    // yScale
    let yScale = d3.scaleLinear()
    .domain([0,d3.max(data)])
    .range([height - padding.top - padding.bottom, 0]);
    //rectPadding
    let rectPadding = 4;
    let rects = svg.selectAll(".tabular_rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("class","tabular_rect")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function(d,i){
            if(i==focusIndex)
            d3.select(this).attr('fill','red');
            return xScale(i) + rectPadding/2;
        } )
        .attr("y",function(d){
            return yScale(d);
        })
        .attr("width", xScale.bandwidth() + rectPadding )
        .attr("height", function(d){
            return height - padding.top - padding.bottom - yScale(d);
        });
}

export default drawLine;
