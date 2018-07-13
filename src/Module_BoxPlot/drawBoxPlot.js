'use strict';
// import base modules
import canvasBase from 'canvasBase';
// import draw bar partial function
import drawLineBase from 'drawLineBase';
import drawMarkBase from 'drawMarkBase';

import drawBox from './drawBox'

const drawBoxPlot = (data,index,boxPlotData,dire,titleCell) => {
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

    // // draw Y 轴
    drawLineBase(ctx,5,height-20,5,0);
    // // draw Mark
    drawMarkBase(canvas.node(),maxData,data.length,width,height-20,scale,dire);
    // set bar Style
    drawBox(ctx,data,width,height,scale,index,boxPlotData,titleCell);
    ctx.scale(2,2);
    return ;
}

export default drawBoxPlot;
