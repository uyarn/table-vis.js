'use strict';

import * as d3 from 'd3';
import baseStyle from '../base/baseStyle';
import drawBarLine from './drawBarLine';
import drawBarMark from './drawBarMark';

const drawBar=(data,focI)=>{
    data = data.map((item)=>{ return parseInt(item, 10);});
    let width=document.body.clientWidth*0.2+15,height=200;
    // initial the canvas
    let canvas = d3.select('.tabular')
    .append("canvas")
    .attr("width", width)
    .attr("height", height)
    .style("animation",'canvas_key 1s')
    .style("WebkitAnimation",'canvas_key 1s');
    let ctx = canvas.node().getContext('2d');
    ctx.translate(15,0);
    let padding = {left:5, right:5, top:5, bottom:5};
    // draw X 轴
    drawBarLine(ctx,0,195,width,195);
    // draw Y 轴
    drawBarLine(ctx,0,195,0,0);
    //
    drawBarMark(ctx,d3.max(data),data.length,height);
    let scale = d3.scaleLinear()
    .range([0, width - padding.left - padding.right])
    .domain([0,d3.max(data)]);
    let rectStyle=baseStyle(ctx);
    data.forEach(function(d,i) {
      ctx.beginPath();
      // set the position of each Rectangle
      ctx.rect((width/data.length)*i*0.95,195,(width/data.length)*0.8,-scale(d));
      // highlight the speical one
      if(i==focI){
          ctx.fillStyle=rectStyle[0];
          ctx.strokeStyle = rectStyle[0];
        }
      else{
          ctx.fillStyle= rectStyle[1];
          ctx.strokeStyle = rectStyle[1];
        }
      ctx.fill();
      ctx.closePath();
    });

}


export default drawBar;
