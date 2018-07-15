'use strict'
// Quick Sort
const quickSort =(arr)=>{
   arr = arr.map((item)=>{
      return parseFloat(item, 10);});
    if (arr.length<=1)
        { return arr; }
    else
    {
      let pivot = Math.floor(arr.length/2)-1
      let pivotNum = arr.splice(pivot,1)[0]
      let leftArr = [];
      let rightArr = [];
      for(let i =0;i<arr.length;i++){
        if(arr[i]<pivotNum)
          leftArr.push(arr[i]);
        else
          rightArr.push(arr[i]);
      }
     return quickSort(leftArr).concat([pivotNum],quickSort(rightArr))
    }
}


export default quickSort;
