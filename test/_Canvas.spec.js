var assert = require('assert');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect
var canvasDom = require('jsdom');

import canvasBase from '../src/_Canvas/canvasBase'
// import drawLineBase from '../src/_Canvas/drawLineBase'
// import drawMarkBase from '../src/_Canvas/drawMarkBase'
const { JSDOM } = canvasDom;

describe('_Canvas Module Tests',()=>{
  jsdom()
  describe('canvasBase Module Tests',()=>{
      // test setCanvas function branch 1
      it('setCanvas function , should return the style type Function',()=>{
        let canvas =canvasBase.setCanvas(300,300,'row');
        expect(Object.prototype.toString.call(canvas.style)).eql('[object Function]')
      });
        // test setCanvas function branch 2
      it('setCanvas function , should return the style type Function',()=>{
        let canvas =canvasBase.setCanvas(300,300,'col');
        expect(Object.prototype.toString.call(canvas.style)).eql('[object Function]')
      });
        // test setScale function
      it('setScale function, should return scale type Function',()=>{
        expect(Object.prototype.toString.call(canvasBase.setScale(300,[1,10,30,12,55]))).eql('[object Function]')
      })
      // test setPieScale function
      it('setScale function, should return PieScale type Function',()=>{
        expect(Object.prototype.toString.call(canvasBase.setPieScale(300))).eql('[object Function]')
      })
      // test maxData function
      it('maxData function, should return maximum of the arr in [55,100,2], 100',()=>{
        expect(canvasBase.maxData([55,100,2])).eql(100)
      })
  })

  // describe('drawLineBase Module Tests',()=>{
  //     let preCanvas ,ctx
  //     const dom = new JSDOM(`<!DOCTYPE html><canvas width="200" height="100"></canvas>`);
  //
  //     preCanvas = dom.window.document.querySelector('canvas');
  //     console.log(preCanvas)
  //     ctx = preCanvas.getContext('2d');
  //     // test setCanvas function branch 1
  //     it('should return the style type Function',()=>{
  //       ctx =drawLineBase(ctx,0,0,0,50);
  //       expect(Object.prototype.toString.call(ctx)).eql('[object HTMLElment]')
  //     });
  //
  // })

})
