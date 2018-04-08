'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result=[];
  var n=0;
  for(var j=0;j<collection.length;j++){
    if(result.indexOf(collection[j])==-1){
      result[n] = collection[j];
      n++;
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
