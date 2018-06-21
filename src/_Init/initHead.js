'use strict'

const initHead =()=>{
   let head = document.createElement('h3');
   let ctf = document.querySelector('.tabular_container_fluid')
   head.innerHTML = ctf.getAttribute('data-head')
   return head;
}


export default initHead;
