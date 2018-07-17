'use strict'

import className from 'className';

const createIcon =()=>{

  let barIcon = document.createElement('i');
  className.addClass(barIcon,'fa fa-chart-bar');
  let pieIcon = document.createElement('i');
  className.addClass(pieIcon,'fa fa-chart-pie');
  let lineIcon = document.createElement('i');
  className.addClass(lineIcon,'fa fa-chart-line');
  let boxPlotIcon = document.createElement('i');
  className.addClass(boxPlotIcon,'fas fa-columns');
  let pointIcon = document.createElement('i');
  className.addClass(pointIcon,'fas fa-braille');
  let wordIcon = document.createElement('i');
  className.addClass(wordIcon,'fas fa-file-word');

  return [barIcon,pieIcon,lineIcon,boxPlotIcon,pointIcon,wordIcon]

}

export default createIcon;
