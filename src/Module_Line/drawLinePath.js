'use strict';

const drawLinePath=(ctx,ori,data,width,height,scale,lineStyle,focI,title,titleIdx)=>{

  let eachLen=width/data.length*0.98
  ctx.font='14px Arial'
  ctx.lineWidth='4'
  data.forEach( (d,i) => {
    ctx.beginPath();
    if(i!=data.length-1){
      ctx.moveTo(eachLen*i+20,height-15-scale(d));
      ctx.lineTo(eachLen*(i+1)+20,height-15-scale(data[i+1]));
      ctx.strokeStyle= lineStyle[1];
    }
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    if((i==focI && titleIdx == undefined)||(titleIdx!= undefined && titleIdx[i].includes(focI))){
          // ctx.arc(eachLen*i+20,height-15-scale(d),20,0,2*Math.PI);
          ctx.font='22px Arial'
          ctx.fillStyle= lineStyle[0];
        }
    else
        ctx.fillStyle= lineStyle[1];

    let content = ori.length>0?ori[i]:d
    ctx.fillText(content,eachLen*i+(eachLen/2),height-scale(d)-20)

    ctx.closePath();
    ctx.fill();
    ctx.fillStyle= lineStyle[1];
    ctx.textAlign = 'center';
      ctx.font='14px Arial'
    ctx.fillText(title[i],eachLen*i+(eachLen/2),height,eachLen);

  });
  return ctx

}

export default drawLinePath;
