'use strict';

const drawLinePath=(ctx,data,width,height,scale,lineStyle,focI,title)=>{

  data.forEach(function(d,i) {
    ctx.beginPath();
    if(i!=data.length-1){
      ctx.moveTo((width/data.length)*i*0.92+20,height-15-scale(d));
      ctx.lineTo((width/data.length)*(i+1)*0.92+20,height-15-scale(data[i+1]));
      ctx.strokeStyle= lineStyle[1];
    }
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    if(i==focI){
          ctx.arc((width/data.length)*i*0.92+20,height-15-scale(d),10,0,2*Math.PI);
          ctx.fillStyle= lineStyle[0];
        }
      else{
          ctx.arc((width/data.length)*i*0.92+20,height-15-scale(d),5,0,2*Math.PI);
          ctx.fillStyle= lineStyle[1];
        }
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle= lineStyle[1];
    ctx.textAlign = 'center';
    ctx.fillText(title[i],(width/data.length)*i*0.92+25,height,25);
    ctx.fillText(d,(width/data.length)*i*0.92+25,height-scale(d),25);
  });


}

export default drawLinePath;
