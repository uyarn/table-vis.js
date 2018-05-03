'use strict';

const swapTabularVis=(click,div,x,y)=>{
    if(!click){
      div.style.top=y+'px';
      div.style.left=x+'px';
      div.style.width=(document.body.clientWidth*0.2)+'px';
      // to standard browser
      div.style.animation = 'tabular 1s';
      // to Chrome and Safari;
      div.style.WebkitAnimation= 'tabular 1s';
      return true;
    }
    else{
        div.removeAttribute('style');
        let tabular=div.firstElementChild;
        tabular.removeChild(tabular.firstElementChild);
        return false;
    }

}

export default swapTabularVis;
