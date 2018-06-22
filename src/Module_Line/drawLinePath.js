'use strict';

const drawLinePath=(ctx,data,width,height,scale,lineStyle,focI,title)=>{

  let eachLen=width/data.length*0.98
  ctx.font='14px Arial'
  ctx.lineWidth='4'
  data.forEach(function(d,i) {
    ctx.beginPath();
    if(i!=data.length-1){
      ctx.moveTo(eachLen*i+20,height-15-scale(d));
      ctx.lineTo(eachLen*(i+1)+20,height-15-scale(data[i+1]));
      ctx.strokeStyle= lineStyle[1];
    }
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    if(i==focI){
          // ctx.arc(eachLen*i+20,height-15-scale(d),20,0,2*Math.PI);
          ctx.font='22px Arial'
          ctx.fillStyle= lineStyle[0];
          ctx.fillText(d,eachLen*i+(eachLen/2),height-scale(d)-20);
        }
      else{
          ctx.fillStyle= lineStyle[1];
          ctx.fillText(d,eachLen*i+(eachLen/2),height-scale(d)-20);
        }
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle= lineStyle[1];
    ctx.textAlign = 'center';
      ctx.font='14px Arial'
    ctx.fillText(title[i],eachLen*i+(eachLen/2),height,eachLen);

  });


}

export default drawLinePath;
