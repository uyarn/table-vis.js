'use strict';
import drawPieText from './drawPieText';
const drawPieCircle=(ctx,data,width,height,scale,total,pie_style,focI)=>{

    // set the radius;
    let arc = {
      x:width*0.5,
      y:height*0.5,
      radius:width<height? width*0.3:height*0.3,
      focusCircle:scale(data[focI])
    }

    ctx.beginPath();
    ctx.moveTo(arc.x,arc.y);
    ctx.arc(arc.x,arc.y,arc.radius,0,arc.focusCircle);
    let flineA = arc.focusCircle/2;
    let flineL ={
      x:arc.x+arc.radius*Math.cos(flineA),
      y:arc.y+arc.radius*Math.sin(flineA)
    }
    flineL.x=flineL.x<arc.x?flineL.x-30:flineL.x+30;
    flineL.y=flineL.y<arc.y?flineL.y-30:flineL.y+30;
    ctx.fillStyle=pie_style[0];
    ctx.strokeStyle=pie_style[0];
    ctx.closePath();
    ctx.fill();
    ctx.moveTo(arc.x,arc.y);
    ctx.lineTo(flineL.x,flineL.y)
    ctx.stroke();

    // draw the remain data circle
    ctx.beginPath();
    //let remainData = total - data[focI];
    ctx.moveTo(arc.x,arc.y)
    ctx.arc(arc.x,arc.y,arc.radius,arc.focusCircle,2*Math.PI);
    let rmA = (arc.focusCircle+2*Math.PI)/2;
    let rmL ={
      x:arc.x+arc.radius*Math.cos(rmA),
      y:arc.y+arc.radius*Math.sin(rmA)
    }
    rmL.x=rmL.x<arc.x?rmL.x-60:rmL.x+30;
    rmL.y=rmL.y<arc.y?rmL.y-60:rmL.y+30;
    ctx.strokeStyle=pie_style[1];
    ctx.fillStyle=pie_style[1];
    ctx.closePath();
    ctx.fill();
    ctx.moveTo(arc.x,arc.y);
    ctx.lineTo(rmL.x,rmL.y)
    ctx.stroke();
    drawPieText(ctx,flineL.x,flineL.y,rmL.x,rmL.y,arc.radius,data[focI],total);
}

export default drawPieCircle;
