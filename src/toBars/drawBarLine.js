'use strict';


const drawBarLine=(ctx,orix,oriy,X,Y)=>{
  ctx.beginPath();
  ctx.moveTo(orix, oriy);
  ctx.lineTo(X, Y);
  ctx.stroke();
  ctx.closePath();
}

export default drawBarLine;
