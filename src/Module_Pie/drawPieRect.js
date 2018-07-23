'use strict'

const drawPieRect =(ctx,title,w)=>{
     let width = w*0.1;
     let except = 'except '.concat(title)
     ctx.beginPath();
     ctx.fillStyle='rgba(110,200,245,1)'
     ctx.rect(width,width,width*0.5,width*0.3)
     ctx.fillText(title,width*1.6,width+16)
     ctx.fill();
     ctx.beginPath();
     ctx.fillStyle='rgba(135,135,135,1)'
     ctx.rect(width,width*1.5,width*0.5,width*0.3)
     ctx.fillText(except,width*1.6,1.5*width+16)
     ctx.fill();
     return ctx;
}

export default drawPieRect;
