'use strict';
// import base modules
import canvasBase from 'canvasBase';
import pointStyle from './pointStyle';
// import draw bar partial function
import drawLineBase from 'drawLineBase';
import drawMarkBase from 'drawMarkBase';
import drawPointCol from './drawPointCol';

const drawPoint=(data,focI,dire,title)=>{
    data = data.map((item)=>{
        return parseFloat(item, 10);});
    let width=document.body.clientWidth*0.6;
    let height=width;
    // initial the canvas
    let cavCon=document.querySelector('.tabular_container')
    if(cavCon.firstElementChild)
      cavCon.removeChild(cavCon.firstElementChild)
    let canvas = canvasBase.setCanvas(width,height,dire);
    let ctx = canvas.node().getContext('2d');
    let scale = canvasBase.setScale(height-30,data);
    let maxData= canvasBase.maxData(data);
    ctx.translate(15,0);

    // draw X 轴
    drawLineBase(ctx,5,height-20,width,height-20);
    // // draw Y 轴
    drawLineBase(ctx,5,height-20,5,0);
    // // draw Mark
    drawMarkBase(canvas.node(),maxData,data.length,width,height-20,scale,dire);
    // set bar Style
    let pStyle = pointStyle(ctx);
    drawPointCol(ctx,data,width,height-20,scale,pStyle,focI,title);
    ctx.scale(2,2);

    return ;
}


export default drawPoint;
