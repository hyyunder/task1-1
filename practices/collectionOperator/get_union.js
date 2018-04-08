'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  var n=0;
  for(var i=0;i<collection_a.length;i++){
    result[n] = collection_a[i];
    n++;
  }
  for(var j=0;j<collection_b.length;j++){
    if(result.indexOf(collection_b[j])==-1){
      result[n] = collection_b[j];
      n++;

    }
  }
  return result;

}

module.exports = get_union;

