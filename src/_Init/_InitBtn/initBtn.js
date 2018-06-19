'use strict';

import className from 'className';

// import colData from 'colData'

const initBtn = function (target){
  let btnContainer = document.createElement('div');
  let btnBox = document.createElement('div');
  // add style of btn
  className.addClass(btnContainer,'tab_vis_btn_container')
  className.addClass(btnBox,'tab_vis_btn')

  let rowBtn = document.createElement('div');
  let columnBtn = document.createElement('div');
  rowBtn.innerHTML= 'ROW';
  columnBtn.innerHTML = 'COL';
  // append row and column button;
  btnBox.appendChild(rowBtn);
  btnBox.appendChild(columnBtn);
  btnContainer.appendChild(btnBox);
  // append button container
  document.body.appendChild(btnContainer);
  // row button event
  rowBtn.addEventListener('click',()=>{
    btnContainer.style.display='none';
    bar()
  })
  // column button event
  columnBtn.addEventListener('click',()=>{
    btnContainer.style.display='none'

  })
  return btnContainer;
}


export default initBtn;
