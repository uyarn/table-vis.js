'use strict';

import className from 'className';
import swapTableVis from 'swapTableVis'
import colData from 'colData'
import rowData from 'rowData'
import bar from 'bar'
import initHead from './initHead'

const initBtn = (target,tcf) => {
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
      document.querySelectorAll('.tabular_highlight').forEach(function(d){
        className.removeClass(d,'tabular_highlight');
      })
      btnContainer.style.display='none';
      let row = rowData(target.ele,target.rowTitle,1);
      let headInx = colData(target.ele,target.colTitle,0).index;

    Object.assign(target.data,{
       data:row.data,
       title:row.title,
       index:row.index,
       oriData:row.oriData,
       head:target.colTitle[headInx].innerHTML,
       status:'row'});
    if('titleIdx' in row)
        Object.assign(target.data,{titleIdx:row.titleIdx});
    else
       {
         if('titleIdx' in target.data)
            delete target.data.titleIdx
       }
    // init head of target
    tcf.insertBefore(initHead(tcf,target.data.head),tcf.querySelector('.tabular_container'));

    swapTableVis(click,tcf);

    bar(row.oriData,row.data,row.index,'row',row.title,row.titleIdx);
    })
  // column button event
  columnBtn.addEventListener('click',
    ()=>{
      document.querySelectorAll('.tabular_highlight').forEach(function(d){
        className.removeClass(d,'tabular_highlight');
      })
     btnContainer.style.display='none'
     let col = colData(target.ele,target.colTitle,1)
     let headInx = rowData(target.ele,target.rowTitle,0).index;

    Object.assign(target.data,{
       data:col.data,
       title:col.title,
       index:col.index,
       oriData:col.oriData,
       head:target.rowTitle[headInx].innerHTML,
       status:'col'});
    if('titleIdx' in col)
       Object.assign(target.data,{titleIdx:col.titleIdx});
       else
          {
            if('titleIdx' in target.data)
               delete target.data.titleIdx
          }
    // init head of target
    tcf.insertBefore(initHead(tcf,target.data.head),tcf.querySelector('.tabular_container'));

    swapTableVis(click,tcf);

    bar(col.oriData,col.data,col.index,'col',col.title,col.titleIdx)
    })
  return btnContainer;
}


export default initBtn;
