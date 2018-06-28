'use strict'
// this files is used to initial the table.
// import style files
import './table_vis_style.css'
import className from 'className'
// init Click Btn
import insertCss from '../_DOM/insertCss'
import createTabular from '../_DOM/createTabular'

import initBtn from './_InitBtn/initBtn'
import colTitle from './_InitTitle/colTitle'
import rowTitle from './_InitTitle/rowTitle'

const initTable = function(table){
    let tBody = table.querySelector('tbody');
    // change the cursor style.
    //改变样式 cursor:pointer
    className.addClass(tBody,'tab_vis_tbody');
    //event delegation 事件委托 tBody代理td事件 利用Js的引用类型是浅拷贝的特点
    let target = { ele:'', rowTitle:'', colTitle:'' }
    let tabular_container_fluid;
    // init the canvas element and the title datas.
    if(!this.initial){
      target.rowTitle = rowTitle(table)
      target.colTitle = colTitle(table)
      insertCss();
      tabular_container_fluid=createTabular(this);
      this.initial = true;
    }
    else {
      tabular_container_fluid = document.querySelector('.tabular_container_fluid');
    }
    let btnContainer = initBtn(target,tabular_container_fluid,this);
    // 单元格事件委托, 只绑定在tbody上。
    tBody.addEventListener('click',
      ()=>{
        let e = event || window.event;
        // let target =e.target;
        let left = e.clientX;
        let top = e.clientY;
        btnContainer.style.left = left+'px';
        btnContainer.style.top = top+'px';
        btnContainer.style.display = 'block'
        target.ele=e.target
      })
}

export default initTable;
