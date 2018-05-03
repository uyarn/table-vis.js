'use strict';
import className from './className';

const createTabular=()=>{
  // create the container div;
  let tabularContainer = document.createElement('div');

  className.addClass(tabularContainer,'tabular_container');
  tabularContainer.addEventListener('click',()=>{
    tabularContainer.removeAttribute('style');
    tabularContainer.style.width = "0";
    tabularContainer.removeChild(tabularContainer.firstElementChild);
  })
  // tabularContainer.appendChild(tabular);
  document.body.appendChild(tabularContainer);
  console.log('Create Tabular div done')
  return tabularContainer;

}

export default createTabular;
