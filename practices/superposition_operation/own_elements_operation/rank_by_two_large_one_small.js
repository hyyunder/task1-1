'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var result=[];
  for(var i=0;i<collection.length;i++){
    for(var j=i;j<collection.length;j++){
      if(collection[i]>collection[j]){
        var temp=collection[i];
        collection[i]=collection[j];
        collection[j]=temp;
      }
    }
  }
  for(var i=0;i<collection.length;i+=3){
    if(collection[i+1]!=undefined&&collection[i+2]!=undefined) {
      var temp = collection[i];
      collection[i] = collection[i + 1];
      collection[i + 1] = collection[i + 2];
      collection[i + 2] = temp;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
