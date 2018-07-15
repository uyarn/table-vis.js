'use strict'

// init the header of tabular_vis component

const initHead =(tcf,headCtx)=>{
   // create the <h3> element.
   if(tcf.querySelector('h3')){
      tcf.querySelector('h3').innerHTML=headCtx;
      return tcf.querySelector('h3');
    }

   else{
     let head = document.createElement('h3');
     head.innerHTML = headCtx;
     return head;
   }

}

export default initHead;
