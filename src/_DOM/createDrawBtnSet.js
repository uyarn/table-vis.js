'use strict';
import className from 'className';
import bar from 'bar';
import pie from 'pie';
import line from 'line';
import boxplot from 'boxplot';
import point from 'point';
import wordCloud from 'wordcloud';
import createIcon from './createIcon';

const createDrawButton=(target)=>{
  // create the container div;
  let d = target.data;
  let buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('id','tabular_vis_btn');
  let icon = createIcon();
  // bar button
  let barBtn = document.createElement('button');
  barBtn.appendChild(icon[0]);
  barBtn.addEventListener('click',()=>{

    let dArr = [d.oriData,d.data,d.index,d.status,d.title,d.titleIdx];
    bar(...dArr)

  });
  buttonContainer.appendChild(barBtn);
  // pie button
  let pieBtn = document.createElement('button');
  let pieIcon = document.createElement('i');
  className.addClass(pieIcon,'fa fa-chart-pie');
  pieBtn.appendChild(icon[1])
  pieBtn.addEventListener('click',()=>{
    let dArr = [d.data,d.index,d.title,d.titleIdx];
    pie(...dArr)
  });
  buttonContainer.appendChild(pieBtn)

  // line button
  let lineBtn = document.createElement('button');
  className.addClass(lineBtn,'numerical');
  lineBtn.appendChild(icon[2])
  lineBtn.addEventListener('click',() =>{
    let dArr = [d.oriData,d.data,d.index,d.status,d.title,d.titleIdx];
    line(...dArr);
  });
  buttonContainer.appendChild(lineBtn)

  // box plot btn
  let boxplotBtn = document.createElement('button');
  className.addClass(boxplotBtn,'numerical');
  boxplotBtn.appendChild(icon[3])
  boxplotBtn.addEventListener('click',()=>{
    let dArr = [d.oriData,d.data,d.index,d.status,d.title];
    boxplot(...dArr);
  });
  buttonContainer.appendChild(boxplotBtn)

  // point btn
  let pointBtn = document.createElement('button');
  pointBtn.appendChild(icon[4])
  className.addClass(pointBtn,'numerical');
  pointBtn.addEventListener('click',()=>{
    let dArr = [d.oriData,d.data,d.index,d.status,d.title,d.titleIdx];
    point(...dArr)
  });
  buttonContainer.appendChild(pointBtn)

  // words Cloud button
  let wordCloudBtn = document.createElement('button');
  className.addClass(wordCloudBtn,'cate');
  wordCloudBtn.appendChild(icon[5])
  wordCloudBtn.addEventListener('click',()=>{
    let dArr = [d.data,d.index,d.title,d.titleIdx];
    wordCloud(...dArr)

  });
  buttonContainer.appendChild(wordCloudBtn)
  return buttonContainer;
}
export default createDrawButton;
