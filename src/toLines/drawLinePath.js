'use strict';

const drawLinePath=(ctx,data,width,height,scale,lineStyle,focI)=>{
  data.forEach(function(d,i) {
    ctx.beginPath();
    if(i==focI){
          ctx.arc((width/data.length)*i*0.92+10,height-scale(d),10,0,2*Math.PI);
          ctx.fillStyle= lineStyle[0];
        }
      else{
          ctx.arc((width/data.length)*i*0.92+10,height-scale(d),5,0,2*Math.PI);
          ctx.fillStyle= lineStyle[1];
        }
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    if(i!=data.length-1){
      ctx.moveTo((width/data.length)*i*0.92+10,height-scale(d));
      ctx.lineTo((width/data.length)*(i+1)*0.92+10,height-scale(data[i+1]));
      ctx.strokeStyle= lineStyle[1];    
    }
    ctx.closePath();
    ctx.stroke();
  });


}

export default drawLinePath;
