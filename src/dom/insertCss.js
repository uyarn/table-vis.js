'use strict';

const insertCss=()=>{
  let css = ".tabular-vis-diagram::after{content:' ';width:100px;height: 100px;background: #f00;}";
  let headElement = document.head || document.getElementsByTagName('head')[0];
  let style = document.createElement('style');
    style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  }
  else {
    style.appendChild(document.createTextNode(css));
  }
  headElement.appendChild(style);
  console.log('Insert css done')

}

export default insertCss;
