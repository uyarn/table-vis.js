'use strict';

const drawPieText=(ctx,x,y,radius,data,total)=>{
    ctx.fillStyle = 'white';
    let percent = (data/total).toFixed(2);
    let remain  = ((total-data)/total).toFixed(2);
    percent = percent.slice(2,4);
    remain =remain.slice(2,4);
    let result = percent+'%';
    let rmResult = remain+'%';
    ctx.fillText(result,x+(radius*0.5),y+(radius*0.2))
    ctx.fillText(rmResult,x+(radius*0.3),y-(radius*0.2))

}

export default drawPieText;
