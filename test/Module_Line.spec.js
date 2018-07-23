var assert = require('assert');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
let createCanvas = require('canvas');
import canvasBase from '../src/_Canvas/canvasBase'


import lineStyle from '../src/Module_Line/lineStyle'
import drawLinePath from '../src/Module_Line/drawLinePath'
let canvas = new createCanvas(200, 200);

describe('Module_Line Tests',()=>{

       jsdom();
      // barStyle test;
      describe('1. lineStyle function test',()=>{

        it('should return rgba(40,125,250,1) and rgba(135,135,135,1)',()=>{
          expect(lineStyle()[0]).eql('rgba(40,125,250,1)');

          expect(lineStyle()[1]).eql('rgba(135,135,135,1)');
        })

      })
      // drawLinePath function testing
      describe('2. drawLinePath function test',()=>{

        it('should return docuemnt',()=>{
          let ctx = canvas.getContext('2d')
          let scale =canvasBase.setScale(300,[1,10,30,12,55])
          ctx = drawLinePath(ctx,[],['m','k'],300,300,scale,lineStyle(),2,['t','q'],[[0,1],[2,3,4]])
          expect(ctx.font).eql('14px Arial')
          expect(ctx.fillStyle).eql('#878787')
        })

      })
      describe('2. drawLinePath function test',()=>{

        it('should return docuemnt',()=>{
          let ctx = canvas.getContext('2d')
          let scale =canvasBase.setScale(300,[1,10,30,12,55])
          ctx = drawLinePath(ctx,["1%","10%","30%","12%","55%"],[1,10,30,12,55],300,300,scale,lineStyle(),2,['t','q','m','d','e'])
          expect(ctx.font).eql('14px Arial')
          expect(ctx.fillStyle).eql('#878787')
        })

      })


})
