var assert = require('assert');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect
let createCanvas = require('canvas');
import canvasBase from '../src/_Canvas/canvasBase'
let canvas = new createCanvas(200, 200);

import pieStyle from '../src/Module_Pie/pieStyle'
import drawPieRect from '../src/Module_Pie/drawPieRect'
import drawPieText from '../src/Module_Pie/drawPieText'
let pie_style;
describe('Module_Pie Tests',()=>{

       jsdom();
      // barStyle test;
      describe('1. pieStyle function test',()=>{

        it('should return `object CanvasGradient` ',()=>{
          let ctx = canvas.getContext('2d')
          pie_style= pieStyle(ctx)
          expect(Object.prototype.toString.call(...pie_style)).eql('[object CanvasGradient]')
        })

      })
      // drawPieRect function testing branch 1
      describe('2. drawPieRect function test',()=>{

        it('should return 14px Arial and #ffffff',()=>{
          let ctx = canvas.getContext('2d')
          let scale =canvasBase.setScale(300,[1,10,30,12,55])
          ctx = drawPieRect(ctx,'test',500)
          expect(ctx.fillStyle).eql('#878787')
        })
      })

      // drawPieText function testing branch 1
      describe('3. drawPieText function test',()=>{

        it('should return 14px Arial and #ffffff',()=>{
          let ctx = canvas.getContext('2d')
          let scale =canvasBase.setScale(300,[1,10,30,12,55])
          ctx = drawPieText(ctx,0,0,20,20,5,50,100)
          expect(ctx.fillStyle).eql('#000000')
          expect(ctx.font).eql('20px Arial')

        })
      })
})
