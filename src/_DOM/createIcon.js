'use strict'

import className from 'className';

const createIcon =()=>{
  let IconList= []
  let barIcon = document.createElement('i');
  className.addClass(barIcon,'fa fa-chart-bar');
  let pieIcon = document.createElement('i');
  className.addClass(pieIcon,'fa fa-chart-line');
  let lineIcon = document.createElement('i');
  className.addClass(lineIcon,'fa fa-chart-bar');
  return [barIcon,pieIcon,lineIcon]

}

export default createIcon;
