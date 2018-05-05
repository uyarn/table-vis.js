'use strict';
// import base modules
import canvasBase from '../base/canvas_base/canvasBase';
import barStyle from './barStyle';
// import draw bar partial function
import drawLineBase from '../base/canvas_base/drawLineBase';
import drawMarkBase from '../base/canvas_base/drawMarkBase';
import drawBarRect from './drawBarRect';

const drawBar=(data,focI,dire)=>{
    data = data.map((item)=>{ return parseFloat(item, 10);});
    let width=document.body.clientWidth*0.3;
    let height=width;
    // initial the canvas
    let canvas = canvasBase.setCanvas(width,height,dire);
    let ctx = canvas.node().getContext('2d');
    let scale = canvasBase.setScale(height,data);
    let maxData= canvasBase.maxData(data);
    ctx.translate(15,0);

    // draw X 轴
    drawLineBase(ctx,5,height-5,width,height-5);
    // draw Y 轴
    drawLineBase(ctx,5,height-5,5,0);
    // draw Mark
    drawMarkBase(ctx,maxData,data.length,width,height);
    // set bar Style
    let rectStyle=barStyle(ctx);
    drawBarRect(ctx,data,width,height,scale,rectStyle,focI);
    return ;
}


export default drawBar;
