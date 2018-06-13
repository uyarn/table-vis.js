'use strict';
// import base modules
import canvasBase from '../_Base/canvas_base/canvasBase';
// import draw bar partial function
import drawLineBase from '../_Base/canvas_base/drawLineBase';
import drawMarkBase from '../_Base/canvas_base/drawMarkBase';

import drawBox from './drawBox'

const drawBoxPlot=(data,index,boxPlotData,dire,titleCell)=>{
    data = data.map((item)=>{
        return parseFloat(item, 10);});
    let width=document.body.clientWidth*0.3;
    let height=width;
    // initial the canvas

    let canvas = canvasBase.setCanvas(width,height,dire);
    let ctx = canvas.node().getContext('2d');
    let scale = canvasBase.setScale(height,data);
    let maxData= canvasBase.maxData(data);
    ctx.translate(15,0);

    // // draw Y 轴
    drawLineBase(ctx,5,height-15,5,0);
    // // draw Mark
    drawMarkBase(canvas.node(),maxData,data.length,width,height,dire);
    // set bar Style
    drawBox(ctx,data,width,height,scale,index,boxPlotData,titleCell)
    return ;
}


export default drawBoxPlot;
