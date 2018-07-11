'use strict';

import className from 'className';
import swapTabularVis from 'swapTabularVis'
import colData from 'colData'
import rowData from 'rowData'
import bar from 'bar'
import initHead from '../initHead'

const initBtn = (target,tcf,table_vis) => {
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

  rowBtn.addEventListener('click',
    ()=>{
      btnContainer.style.display='none';
      let row = rowData(target.ele,target.rowTitle);
      let headInx = colData(target.ele,target.colTitle).index;
    Object.assign(table_vis.data,{
       data:row.data,
       title:row.title,
       index:row.index,
       head:target.colTitle[headInx].innerHTML,
       status:'row'});
    if('titleIdx' in row)
        Object.assign(table_vis.data,{titleIdx:row.titleIdx});
    // init head of table_vis
    tcf.insertBefore(initHead(tcf,table_vis.data.head),tcf.querySelector('.tabular_container'));

    swapTabularVis(click,tcf);

    bar(row.data,row.index,'row',row.title,row.titleIdx);
    })
  // column button event
  columnBtn.addEventListener('click',
    ()=>{
     btnContainer.style.display='none'
     let col = colData(target.ele,target.colTitle)
     let headInx = rowData(target.ele,target.rowTitle).index;

    Object.assign(table_vis.data,{
       data:col.data,
       title:col.title,
       index:col.index,
       head:target.rowTitle[headInx].innerHTML,
       status:'col'});
    if('titleIdx' in col)
       Object.assign(table_vis.data,{titleIdx:col.titleIdx});
    // init head of table_vis
    tcf.insertBefore(initHead(tcf,table_vis.data.head),tcf.querySelector('.tabular_container'));

    swapTabularVis(click,tcf);

    bar(col.data,col.index,'col',col.title,col.titleIdx)
    })
  return btnContainer;
}


export default initBtn;
