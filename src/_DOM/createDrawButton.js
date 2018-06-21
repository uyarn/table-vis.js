'use strict';
import className from 'className';
import bar from 'bar';
import pie from 'pie';
import line from 'line';
import boxplot from 'boxplot';
import point from 'point';
import createIcon from './createIcon'

const createDrawButton=()=>{
  // create the container div;
  let buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('id','tabular_vis_btn');
  let icon = createIcon();
  // bar button
  let barBtn = document.createElement('button');
  barBtn.appendChild(icon[0]);
  barBtn.addEventListener('click',()=>{
    let ctf = document.querySelector('.tabular_container_fluid')
    let data = ctf.getAttribute('data-on');
    let index = ctf.getAttribute('data-index')
    let title = ctf.getAttribute('data-title')
    let status =ctf.getAttribute('data-status')
    bar(data.split(','),index,status,title.split(','))
  });
  buttonContainer.appendChild(barBtn);

  // pie button
  let pieBtn = document.createElement('button');
  pieBtn.appendChild(icon[1])
  pieBtn.addEventListener('click',()=>{
    let ctf = document.querySelector('.tabular_container_fluid')
    let data = ctf.getAttribute('data-on');
    let index = ctf.getAttribute('data-index')
    pie(data.split(','),index)
  });
  buttonContainer.appendChild(pieBtn)

  // line button
  let lineBtn = document.createElement('button');
  lineBtn.appendChild(icon[2])
  lineBtn.addEventListener('click',function(){
    let ctf = document.querySelector('.tabular_container_fluid')
    let data = ctf.getAttribute('data-on');
    let index = ctf.getAttribute('data-index')
    let title = ctf.getAttribute('data-title')
    let status =ctf.getAttribute('data-status')
    line(data.split(','),index,status,title.split(','))
  });
  buttonContainer.appendChild(lineBtn)

  // box plot btn
  let boxplotBtn = document.createElement('button');
  boxplotBtn.innerHTML = 'boxPlot'
  boxplotBtn.addEventListener('click',()=>{
    let ctf = document.querySelector('.tabular_container_fluid')
    let data = ctf.getAttribute('data-on');
    let index = ctf.getAttribute('data-index')
    let title = ctf.getAttribute('data-title')
    let status =ctf.getAttribute('data-status')
    boxplot(data.split(','),index,status,title.split(','))
  });
  buttonContainer.appendChild(boxplotBtn)
  // point btn
  let pointBtn = document.createElement('button');
  pointBtn.innerHTML = 'point'
  pointBtn.addEventListener('click',()=>{
    let ctf = document.querySelector('.tabular_container_fluid')
    let data = ctf.getAttribute('data-on');
    let index = ctf.getAttribute('data-index')
    let title = ctf.getAttribute('data-title')
    let status =ctf.getAttribute('data-status')
    point(data.split(','),index,status,title.split(','))
  });
  buttonContainer.appendChild(pointBtn)
  return buttonContainer;
}
export default createDrawButton;
