'use strict';

const barStyle=(ctx)=>{
  let focusGrad = ctx.createLinearGradient(0,200,0,0);
      focusGrad.addColorStop(0, 'rgba(110,200,245,1)');
      focusGrad.addColorStop(1, 'rgba(40,125,250,1)');
  let normalGrad = ctx.createLinearGradient(0,200,0,0);
      normalGrad.addColorStop(0, 'rgba(135,135,135,1)');
      normalGrad.addColorStop(1, 'rgba(0,60,60,1)');
  return [focusGrad,normalGrad];
}

export default barStyle;
