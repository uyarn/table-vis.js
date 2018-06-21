'use strict'

import className from 'className';

const createIcon=()=>{
  let IconList=[]
  let barIcon = document.createElement('i');
  className.addClass(barIcon,'fa fa-chart-bar');
  IconList.push(barIcon)
  let pieIcon = document.createElement('i');
  className.addClass(pieIcon,'fa fa-chart-pie');
  IconList.push(pieIcon)
  let lineIcon = document.createElement('i');
  className.addClass(lineIcon,'fa fa-chart-line');
  IconList.push(lineIcon)
  return IconList
}

export default createIcon;
