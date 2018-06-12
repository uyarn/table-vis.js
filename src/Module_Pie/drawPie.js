'use strict';
// import base modules
import canvasBase from '../base/canvas_base/canvasBase';

// import draw bar partial function
import drawLineBase from '../base/canvas_base/drawLineBase';
import drawMarkBase from '../base/canvas_base/drawMarkBase';
import drawPieCircle from './drawPieCircle';
import pieStyle from './pieStyle';

const drawPie=(data,focI)=>{
    let total=0;
    data = data.map((item)=>{
      total=total+parseFloat(item, 10);
      return parseFloat(item, 10);});
    // initial the canvas
    let width=document.body.clientWidth*0.3;
    let height=width;
    let canvas = canvasBase.setCanvas(width,height);
    let ctx = canvas.node().getContext('2d');
    let scale = canvasBase.setPieScale(total);
    ctx.translate(15,0);
    // set bar Style
    let pie_style=pieStyle(ctx);
    drawPieCircle(ctx,data,width,height,scale,total,pie_style,focI);

}


export default drawPie;
