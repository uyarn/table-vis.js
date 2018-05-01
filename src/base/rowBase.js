'use strict';

const rowBase = (vis_cell)=>{
  if(typeof vis_cell=="object")
    return Array.from(vis_cell.children);
  else
    console.error("the cell bind doesn't come from DOM ");
}

export default rowBase;
