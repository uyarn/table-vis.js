'use strict';

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
    ctx.fillStyle=pie_style[0];
    ctx.closePath();
    ctx.fill();


    // draw the remain data circle
    ctx.beginPath();
    //let remainData = total - data[focI];
    ctx.moveTo(arc.x,arc.y)
    ctx.arc(arc.x,arc.y,arc.radius,arc.focusCircle,2*Math.PI);
    ctx.fillStyle=pie_style[1];
    ctx.closePath();
    ctx.fill();


}

export default drawPieCircle;
