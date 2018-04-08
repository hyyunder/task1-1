'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var avg=0;
  var num=0
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==1){
      avg+=collection[i];
      num++;
    }
  }
  avg=avg/num;
  return avg;
}

module.exports = average_uneven;
