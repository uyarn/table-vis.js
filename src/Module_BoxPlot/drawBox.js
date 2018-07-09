'use strict';

const drawBox = (ctx,data,width,height,scale,index,boxPlotData,titleCell)=>{
      ctx.beginPath();

      // draw max min value line;
      ctx.strokeStyle='#000000';
      ctx.fillStyle='#000000';
      ctx.font='20px Arial';
      let maxPos = height-scale(boxPlotData.max)-10;
      let minPos = height-scale(boxPlotData.min)-10;
      let middlePos = height -scale(boxPlotData.middle)-10
      let rectY = height -scale (boxPlotData.q3)-10;
      let rectH = scale (boxPlotData.q3-boxPlotData.q1);

      //max and min data
      ctx.moveTo(width*0.4,maxPos);
      ctx.lineTo(width*0.5,maxPos);
      ctx.fillText('Max',width*0.7,maxPos)
      ctx.moveTo(width*0.4,minPos);
      ctx.lineTo(width*0.5,minPos);
      ctx.fillText('Min',width*0.7,minPos)
      ctx.moveTo(width*0.45,maxPos);
      ctx.lineTo(width*0.45,minPos);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle='#000';
      ctx.fillStyle='#FFF';
      ctx.fillRect(width*0.3,rectY,width*0.3,rectH);
      ctx.strokeRect(width*0.3,rectY,width*0.3,rectH);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle='#000';
      ctx.moveTo(width*0.3,middlePos);
      ctx.lineTo(width*0.6,middlePos);
      ctx.fillText('Middle',width*0.8,middlePos)
      ctx.stroke();


      ctx.beginPath();
      ctx.strokeStyle='#108AEC';
      ctx.fillStyle='#108AEC';
      let focPos =  height-scale(data[index])-10;
      ctx.arc(width*0.5,focPos,10,0,Math.PI*2)
      ctx.font='20px Arial'
      ctx.fillText(data[index],width*0.2,focPos);
      ctx.fill();
      // ctx.stroke();
}

export default drawBox;
