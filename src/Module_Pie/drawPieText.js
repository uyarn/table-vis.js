'use strict';

const drawPieText=(ctx,rx,ry,rmx,rmy,radius,data,total)=>{
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.font='20px Arial'
    let percent = (data/total).toFixed(2);
    let remain  = ((total-data)/total).toFixed(2);
    percent = percent.slice(2,4);
    remain =remain.slice(2,4);
    let result = percent+'%';
    let rmResult = remain+'%';
    ctx.fillText(result,rx,ry)
    ctx.fillText(rmResult,rmx,rmy)

}

export default drawPieText;
