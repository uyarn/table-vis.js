'use strict';
// import base modules
import canvasBase from 'canvasBase';

// import draw bar partial function
import drawLineBase from 'drawLineBase';
import drawMarkBase from 'drawMarkBase';
import drawPieCircle from './drawPieCircle';
import drawPieRect from './drawPieRect';

import pieStyle from './pieStyle';

const drawPie=(data,focI,title)=>{
    let total=0;
    data = data.map((item)=>{
         total = total + parseFloat(item, 10);
         return parseFloat(item, 10)
        })
    // initial the canvas
    let width=document.body.clientWidth*0.6;
    let height=width;
    let cavCon=document.querySelector('.tabular_container')
    if(cavCon.firstElementChild)
        cavCon.removeChild(cavCon.firstElementChild)
    let canvas = canvasBase.setCanvas(width,height);
    let ctx = canvas.node().getContext('2d');
    let scale = canvasBase.setPieScale(total);
    ctx.translate(15,0);
    // set bar Style
    let pie_style=pieStyle(ctx);
    drawPieCircle(ctx,data,width,height,scale,total,pie_style,focI);
    drawPieRect(ctx,title[focI],width);
    ctx.scale(2,2);

}


export default drawPie;
