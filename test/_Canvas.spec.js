let assert = require('assert');
let jsdom = require('mocha-jsdom');
let expect = require('chai').expect
let createCanvas = require('canvas');

import canvasBase from '../src/_Canvas/canvasBase'
import drawLineBase from '../src/_Canvas/drawLineBase'
import drawMarkBase from '../src/_Canvas/drawMarkBase'

let scale;
let nodeCanvas = new createCanvas(200, 200)

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
        scale = canvasBase.setScale(300,[1,10,30,12,55])
        expect(Object.prototype.toString.call(scale)).eql('[object Function]')
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

  describe('drawLineBase Module Tests',()=>{
      let ctx = nodeCanvas.getContext('2d')
      // test drawLineBase function branch 1
      it('should return `object CanvasRenderingContext2D`',()=>{
        ctx =drawLineBase(ctx,0,0,0,50);
        expect(Object.prototype.toString.call(ctx)).eql('[object CanvasRenderingContext2D]')
      });

  })

  describe('drawMarkBase Module Tests',()=>{
      // test drawMarkBase function branch 1
      it('should return rgba(135, 135, 135, 0.50)',()=>{
        let ctx =drawMarkBase(nodeCanvas,50,10,300,300,scale,'row');
        expect(ctx.strokeStyle).eql('rgba(135, 135, 135, 0.50)')
      });

  })

  describe('drawMarkBase Module Tests',()=>{
      // test drawMarkBase function branch 2
      it('should return rgba(135, 135, 135, 0.50)',()=>{
        let ctx =drawMarkBase(nodeCanvas,5,10,300,300,scale,'row');
        expect(ctx.strokeStyle).eql('rgba(135, 135, 135, 0.50)')
      });

  })
})
