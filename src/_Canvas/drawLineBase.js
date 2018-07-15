'use strict';
// draw Axis
// 绘制坐标系。
const drawBarLine=(ctx,orix,oriy,X,Y)=>{
  ctx.beginPath();
  ctx.moveTo(orix, oriy);
  ctx.lineTo(X, Y);
  ctx.closePath();
  ctx.stroke();
  return ctx;
}

export default drawBarLine;
