'use strict';
// import base modules
import * as d3 from 'd3-selection'
import canvasBase from 'canvasBase';


import cloud from 'd3-cloud';

const drawWordCloud = (data,index,title,titleIdx) => {
  let cavCon=document.querySelector('.tabular_container')
    if(cavCon.firstElementChild)
      cavCon.removeChild(cavCon.firstElementChild)
  let scale = canvasBase.setScale(100,data);
  let layout = cloud()
    .size([400, 400])
    .words(title.map(function(d,i) {
      if(titleIdx[i].includes(index)){
        return {text: d, size: scale(data[i]), color:'rgba(40,125,250,1)'}
      }
      else
       return {text: d, size: scale(data[i]), color:'#000'}
    }))
    .padding(5)
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", drawWordText);

  layout.start();

function drawWordText(words){
    d3.select(".tabular_container").append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("fill",function(d){ return d.color})
      .style("font-family", "Impact")
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")";
      })
      .text(function(d) { return d.text; });

  }
}

export default drawWordCloud;
