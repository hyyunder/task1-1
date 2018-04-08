'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum=0;
  var avg=0;
  var result;
  for(var i=0;i<collection.length;i++){
    sum+=collection[i];
  }
  avg=sum/(collection.length);
  result=String.fromCharCode(96 + Math.ceil(avg));
  return result;
}

module.exports = average_to_letter;

