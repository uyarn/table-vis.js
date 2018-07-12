'use strict';

const className={
  addClass:function(ele,name){
      // get the origin class name
      let originClassName = ele.className;
      // if it has class name , make a blank, else make nothing
      let addClassName = originClassName +((originClassName=="")?"":" ")+name;
      ele.className = addClassName;
      // callback(ele);
  },
  removeClass:function (ele,name){
      let originClassName =" "+ele.className+" ";
      originClassName = originClassName.replace(/(\s+)/gi, " ");
      // remove the class name
      let removedName = originClassName.replace(" "+name+" ", " ");
      // remove the useless space
      let removedSpace = removedName.replace(/(^\s+)|(\s+$)/g, "");
      ele.className = removedSpace;
  }
}
export default className;
