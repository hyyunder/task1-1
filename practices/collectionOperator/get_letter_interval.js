'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result=[];
  var n=0;
  if(number_b<number_a){
    for (var i = 96+number_a; i >= 96+number_b; i--) {
        result[n] = String.fromCharCode(i);
        n++;
    }
  }else {
    for (var i = 96+number_a; i <= 96+number_b; i++) {
        result[n] = String.fromCharCode(i);
        n++;
    }
  }
  return result;
}

module.exports = get_letter_interval;
