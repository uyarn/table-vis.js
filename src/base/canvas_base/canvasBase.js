'use strict';

import * as d3 from 'd3';

const canvasBase={
   setCanvas:function(width,height){
     let canvas = d3.select('.tabular_container')
     .append("canvas")
     .attr("width", width)
     .attr("height", height)
     .style("animation",'canvas_key 1s')
     .style("WebkitAnimation",'canvas_key 1s');
     return canvas;
   },
   setScale:function(height,data){
     let scale = d3.scaleLinear()
     .range([0, height-20])
     .domain([0,d3.max(data)]);
     return scale;
   },
   setPieScale:function(total){
     let scale = d3.scaleLinear()
     .range([0,2*Math.PI])
     .domain([0,total]);
     return scale;
   },
   maxData:function(data){
     return d3.max(data);
   }
}

export default canvasBase;
