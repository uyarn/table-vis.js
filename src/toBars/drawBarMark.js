'use strict';

const drawBarMark=(ctx,maxData,len,height)=>{
      ctx.strokeStyle = 'black';
      let eachMark = parseInt(maxData/len);
      ctx.textAlign = 'right';
      for(let i=0; i<=len;i=i+2){
        let thisMark = i*eachMark;
        let y= parseInt(height*(1-thisMark/maxData));
        // mark the figure
        ctx.fillText(thisMark,0,y);
      }
}

export default drawBarMark;
