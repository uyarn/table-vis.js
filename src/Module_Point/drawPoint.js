'use strict';
// import base modules
import canvasBase from '../_Base/canvas_base/canvasBase';
import pointStyle from './pointStyle';
// import draw bar partial function
import drawLineBase from '../_Base/canvas_base/drawLineBase';
import drawMarkBase from '../_Base/canvas_base/drawMarkBase';
import drawPointCol from './drawPointCol';

const drawPoint=(data,focI,dire,title)=>{
    data = data.map((item)=>{
        return parseFloat(item, 10);});
    let width=document.body.clientWidth*0.6;
    let height=width;
    // initial the canvas
    let canvas = canvasBase.setCanvas(width,height,dire);
    let ctx = canvas.node().getContext('2d');
    let scale = canvasBase.setScale(height,data);
    let maxData= canvasBase.maxData(data);
    ctx.translate(15,0);

    // draw X 轴
    drawLineBase(ctx,5,height-15,width,height-15);
    // // draw Y 轴
    drawLineBase(ctx,5,height-15,5,0);
    // // draw Mark
    drawMarkBase(canvas.node(),maxData,data.length,width,height,dire);
    // set bar Style
    let pStyle = pointStyle(ctx);
    drawPointCol(ctx,data,width,height,scale,pStyle,focI,title);
    ctx.scale(2,2);

    return ;
}


export default drawPoint;
