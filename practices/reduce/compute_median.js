'use strict';

function compute_median(collection) {
  //在这里写入代码
  for(var i=0;i<collection.length-1;i++){
    for(var j=0;j<collection.length-i-1;j++){
      if(collection[j]>collection[j+1]){
        var temp;
        temp=collection[j];
        collection[j]=collection[j+1];
        collection[j+1]=temp;
      }
    }
  }
  var result;
  if((collection.length%2)==1){
    var a=parseInt(collection.length/2);
    result=collection[a-1];
  }else{
    result=(collection[(collection.length/2)-1]+collection[collection.length/2])/2;
  }
  return result;
}

module.exports = compute_median;


