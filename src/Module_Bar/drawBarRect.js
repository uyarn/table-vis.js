'use strict';

const drawBarRect=(ctx,data,width,height,scale,rectStyle,focI,title)=>{
  let columnWidth = (width/data.length)*0.8;
  let scaleX =(width/data.length)*0.92;
  data.forEach(function(d,i) {
    // set the position of each Rectangle
    ctx.beginPath();
    ctx.rect(scaleX*i+10,height-15,columnWidth,-scale(d));
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
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.textAlign = 'center';
    ctx.fillText(title[i],scaleX*i+25,height,25);
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fillText(d,scaleX*i+25,height-scale(d),25)
  });
}

export default drawBarRect;
