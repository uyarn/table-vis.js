'use strict';

import className from 'className';
import swapTabularVis from 'swapTabularVis'
import colData from 'colData'
import rowData from 'rowData'
import bar from 'bar'
import initHead from '../initHead'

const initBtn = function (target,tcf){
  // tcf = tcf
  let btnContainer = document.createElement('div');
  let btnBox = document.createElement('div');
  // add style of btn
  className.addClass(btnContainer,'tab_vis_btn_container')
  className.addClass(btnBox,'tab_vis_btn')

  let rowBtn = document.createElement('div');
  let columnBtn = document.createElement('div');
  rowBtn.innerHTML= 'ROW';
  columnBtn.innerHTML = 'COL';
  let click = false;
  // append row and column button;
  btnBox.appendChild(rowBtn);
  btnBox.appendChild(columnBtn);
  btnContainer.appendChild(btnBox);
  // append button container
  document.body.appendChild(btnContainer);
  // row button event
  rowBtn.addEventListener('click',function(){
    console.log(this)
    btnContainer.style.display='none';
    let row = rowData(target.ele,target.rowTitle);
    let headInx = colData(target.ele,target.colTitle).index

    tcf.setAttribute('data-on',row.data)
    tcf.setAttribute('data-title',row.title)
    tcf.setAttribute('data-index',row.index)
    tcf.setAttribute('data-head',target.colTitle[headInx].innerHTML)
    tcf.setAttribute('data-status','row')
    if(tcf.querySelector('h3'))
      tcf.querySelector('h3').innerHTML=target.colTitle[headInx].innerHTML;
    else
      tcf.insertBefore(initHead(),tcf.querySelector('.tabular_container'));
    swapTabularVis(click,tcf);
    bar(row.data,row.index,'row',row.title);
  })
  // column button event
  columnBtn.addEventListener('click',()=>{
    btnContainer.style.display='none'
    let col = colData(target.ele,target.colTitle)
    let headInx = rowData(target.ele,target.rowTitle).index

    tcf.setAttribute('data-on',col.data)
    tcf.setAttribute('data-title',col.title)
    tcf.setAttribute('data-index',col.index)
    tcf.setAttribute('data-status','col')
    tcf.setAttribute('data-head',target.rowTitle[headInx].innerHTML)
    if(tcf.querySelector('h3'))
      tcf.querySelector('h3').innerHTML=target.rowTitle[headInx].innerHTML;
    else
      tcf.insertBefore(initHead(),tcf.querySelector('.tabular_container'));
    swapTabularVis(click,tcf);
    bar(col.data,col.index,'col',col.title)
  })
  return btnContainer;
}


export default initBtn;
