'use strict';

const insertCss=()=>{
  // insert the css style string ;
  let animation = "@keyframes tabular{ from{ width:0px} to { width:20%} }\n"
  let WebkitAnimation = "@-webkit-keyframes tabular{ from{ width:0} to { width:20%} }\n"
  let canvas_animate = "@keyframes canvas_key{ from{ height:0} to { height:100%} }\n"
  let canvas_animate_webkit = "@-webkit-keyframes canvas_key{ from{ height:0} to { height:100%} }\n"

  let tabularContainerCss = ".tabular_container{position:fixed;height:200px;background:rgba(255,255,255,0.5)}\n";
  let tabularCss=".tabular{position:relative;width:100%;height:100%;}\n";
  //let persudoCss=".tabular::after{content:' ';width:0;height:0;background: #fff;position:absolute}";
  // link all style;
  let css = ''.concat(animation,canvas_animate,canvas_animate_webkit,tabularContainerCss,tabularCss);
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
  console.log('Insert Css done')
}

export default insertCss;
