'use strict';

import * as d3a from 'd3-array';
import * as d3s from 'd3-selection';
import * as d3sc from 'd3-scale';

const canvasBase={
   setCanvas:function(width,height,dire){
     let canvas = d3s.select('.tabular_container')
     .append("canvas")
     .attr("width", width)
     .attr("height", height)
     .style("animation",'canvas_key 1s')
     .style("WebkitAnimation",'canvas_key 1s');
     if(dire == 'col')
      d3s.select('.tabular_container').select('canvas').style('transform','rotate(90deg)');
     return canvas;
   },
   setScale:function(height,data){
     let scale = d3sc.scaleLinear()
     .range([0, height-20])
     .domain([0,d3a.max(data)]);
     return scale;
   },
   setPieScale:function(total){
     let scale = d3sc.scaleLinear()
     .range([0,2*Math.PI])
     .domain([0,total]);
     return scale;
   },
   maxData:function(data){
     return d3a.max(data);
   }
}

export default canvasBase;
