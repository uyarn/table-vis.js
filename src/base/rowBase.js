'use strict';

const rowBase = (vis_cell)=>{
  vis_cell.childNodes.forEach(
    function(val){
      val.addEventListener('mouseover',function(){
        console.log('hello world');
      })
    })
}

module.exports=rowBase;
