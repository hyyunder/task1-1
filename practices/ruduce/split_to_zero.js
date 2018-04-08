'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result=[];
  var n=0;
  result[0]=number;
  while((result[n]>0)) {
    var s=result[n]-interval;
    result[n+1]=Number(s.toFixed(1));
    n++;
  }
  return result;
}

module.exports = spilt_to_zero;
