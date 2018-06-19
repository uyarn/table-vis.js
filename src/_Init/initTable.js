'use strict'
// Initial the table.
import './table_vis_style.css'
import className from '../_DOM/className'
// init Click Btn
import initBtn from './_InitBtn/initBtn'
import colTitle from './_InitTitle/colTitle'
import rowTitle from './_InitTitle/rowTitle'

const initTable = function(table){
    let tBody = table.querySelector('tbody');
    // change the cursor style.
    //改变样式 cursor:pointer
    className.addClass(tBody,'tab_vis_tbody');
    //event delegation 事件委托 tBody代理td事件
    //利用Js的引用类型是浅拷贝的特点

    let target = { ele:'', rowTitle:'', colTitle:'' }
    target.rowTitle = rowTitle(table)
    target.colTitle = colTitle(table)

    let btnContainer = initBtn(target);
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
