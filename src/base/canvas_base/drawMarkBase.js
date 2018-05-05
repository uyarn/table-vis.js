'use strict';

const drawBarMark=(ctx,maxData,len,width,height)=>{
      ctx.strokeStyle = 'black';
      let eachMark = parseInt(maxData/len)*2;
      if(eachMark==0)
       eachMark = 0.5;
      ctx.textAlign = 'right';
      let i=0;
      let actualHeight=height-10;
      ctx.fillText(0,0,actualHeight);
      while(i<maxData){
        let thisMark = i+eachMark;
        let y= parseInt(actualHeight*(1-thisMark/(maxData)));
        ctx.moveTo(5,y);
        ctx.lineTo(width,y);
        ctx.strokeStyle="rgba(135,135,135,0.5)";
        ctx.stroke();
        // mark the figure
        ctx.fillText(thisMark,0,y,15);
        i=i+eachMark;
      }

}

export default drawBarMark;
