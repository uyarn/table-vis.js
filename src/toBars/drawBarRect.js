'use strict';

const drawBarRect=(ctx,data,width,height,scale,rectStyle,focI)=>{
  data.forEach(function(d,i) {
    ctx.beginPath();
    // set the position of each Rectangle
    ctx.rect((width/data.length)*i*0.92+10,height-5,(width/data.length)*0.8,-scale(d));
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

export default drawBarRect;
