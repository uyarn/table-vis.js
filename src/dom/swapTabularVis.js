'use strict';

const swapTabularVis=(click,div)=>{
      if(!click){
        div.style.width=(document.body.clientWidth*0.3)+'px';
        div.style.height=(document.body.clientWidth*0.3)+'px';
        // to standard browser
        div.style.animation = 'tabular 1s';
        // to Chrome and Safari;
        div.style.WebkitAnimation= 'tabular 1s';
        div.style.cursor = 'pointer';
        return true;
      }
      else{
        if(div.style.width!="0px"){
          div.removeAttribute('style');
          div.style.width = "0";
          div.removeChild(div.firstElementChild);
          return false;
        }
        else {
          div.style.width=(document.body.clientWidth*0.3)+'px';
          div.style.height=(document.body.clientWidth*0.3)+'px';
          // to standard browser
          div.style.animation = 'tabular 1s';
          // to Chrome and Safari;
          div.style.WebkitAnimation= 'tabular 1s';
          div.style.cursor = 'pointer';
          return true;
        }
      }

}

export default swapTabularVis;
