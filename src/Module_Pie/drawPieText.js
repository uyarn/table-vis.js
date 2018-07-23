'use strict';

const drawPieText=(ctx,rx,ry,rmx,rmy,radius,data,total)=>{
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.font='20px Arial'
    // calculate the percentage.
    let percent = parseFloat((data/total))
    // into %
    percent = Number(percent*100).toFixed(2);
    let result = percent+'%';
    let rmResult = (100-percent).toFixed(2)+'%';
    ctx.fillText(result,rx,ry)
    ctx.fillText(rmResult,rmx,rmy)
    return ctx
}

export default drawPieText;
