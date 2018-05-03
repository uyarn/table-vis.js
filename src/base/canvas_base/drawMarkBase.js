'use strict';

const drawBarMark=(ctx,maxData,len,width,height)=>{
      ctx.strokeStyle = 'black';
      let eachMark = parseInt(maxData/len)*2;
      ctx.textAlign = 'right';
      let i=0;
      ctx.fillText(0,0,height-5);
      while(i<maxData){

        let thisMark = i+eachMark;
        let y= parseInt(height*(1-thisMark/maxData));
        ctx.moveTo(0,y);
        ctx.lineTo(width,y)
        ctx.strokeStyle="rgba(135,135,135,0.5)";
        ctx.stroke();
        // mark the figure
        ctx.fillText(thisMark,0,y);
        i=i+eachMark;
      }

}

export default drawBarMark;
