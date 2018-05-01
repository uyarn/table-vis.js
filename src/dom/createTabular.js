'use strict';
import className from './className';

const createTabular=()=>{
  // create the container div;
  let tabularContainer = document.createElement('div');
  // create the tabular div
  let tabular = document.createElement('div');
  className.addClass(tabular,'tabular');
  className.addClass(tabularContainer,'tabular_container');
  tabularContainer.appendChild(tabular);
  document.body.appendChild(tabularContainer);
  return tabularContainer;
  console.log('Create fixed Tabular done')

}

export default createTabular;
