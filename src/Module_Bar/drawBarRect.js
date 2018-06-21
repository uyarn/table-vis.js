'use strict';

const drawBarRect=(ctx,data,width,height,scale,rectStyle,focI,title)=>{
  let columnWidth = (width/data.length)*0.8;
  let scaleX =(width/data.length)*0.98;
  ctx.font='14px Arial';
  data.forEach(function(d,i) {
    // set the position of each Rectangle
    ctx.beginPath();
    ctx.rect(scaleX*i+10,height-20,columnWidth,-scale(d));
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
    //title
    ctx.fillText(title[i],scaleX*i+10+columnWidth/2,height,columnWidth);
    // number
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fillText(d,scaleX*i+10+columnWidth/2,height-scale(d),columnWidth)
  });

}

export default drawBarRect;
