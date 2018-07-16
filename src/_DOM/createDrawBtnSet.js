'use strict';
import className from 'className';
import bar from 'bar';
import pie from 'pie';
import line from 'line';
import boxplot from 'boxplot';
import point from 'point';
import createIcon from './createIcon'

const createDrawBtnSets = (target) => {
  // create the container div;
  let d = target.data;
  let buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('id','tabular_vis_btn');
  let icon = createIcon();
  console.log(icon)
  // bar button
  let barBtn = document.createElement('button');
  barBtn.appendChild(icon[0]);
  barBtn.addEventListener('click',()=>{

    let dArr = [d.data,d.index,d.status,d.title,d.titleIdx];
    bar(...dArr)

  });
  buttonContainer.appendChild(barBtn);

  // pie button
  let pieBtn = document.createElement('button');
  pieBtn.appendChild(icon[1])
  pieBtn.addEventListener('click',()=>{
    let dArr = [d.data,d.index,d.title,d.titleIdx];
    pie(...dArr)
  });
  buttonContainer.appendChild(pieBtn)

  // line button
  let lineBtn = document.createElement('button');
  lineBtn.appendChild(icon[2])
  lineBtn.addEventListener('click',function(){
    let dArr = [d.data,d.index,d.status,d.title,d.titleIdx];
    line(...dArr);
  });
  buttonContainer.appendChild(lineBtn)

  // box plot btn
  let boxplotBtn = document.createElement('button');
  boxplotBtn.innerHTML = 'boxPlot'
  boxplotBtn.addEventListener('click',()=>{
    let dArr = [d.data,d.index,d.status,d.title];
    boxplot(...dArr);
  });
  buttonContainer.appendChild(boxplotBtn)
  // point btn
  let pointBtn = document.createElement('button');
  pointBtn.innerHTML = 'point'
  pointBtn.addEventListener('click',()=>{
    let dArr = [d.data,d.index,d.status,d.title,d.titleIdx];
    point(...dArr)
  });
  buttonContainer.appendChild(pointBtn)
  return buttonContainer;
}
export default createDrawBtnSets;
