'use strict';

import className from 'className';
import swapTabularVis from 'swapTabularVis'
import colData from 'colData'
import rowData from 'rowData'
import bar from 'bar'

const initBtn = function (target,tabular_container){
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
  rowBtn.addEventListener('click',()=>{
    btnContainer.style.display='none';
    let row = rowData(target.ele,target.rowTitle)
    swapTabularVis(click,tabular_container);
    bar(row.data,row.index,'row',row.title)
  })
  // column button event
  columnBtn.addEventListener('click',()=>{
    btnContainer.style.display='none'
    let col = colData(target.ele,target.colTitle)
    swapTabularVis(click,tabular_container);
    bar(col.data,col.index,'col',col.title)
  })
  return btnContainer;
}


export default initBtn;
