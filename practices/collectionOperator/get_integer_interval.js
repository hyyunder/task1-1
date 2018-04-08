'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result=[];
  var n=0;
  if(number_b<number_a){
    for (var i = number_a; i >= number_b; i--) {
        result[n] = i;
        n++;
    }
  }else {
    for (var i = number_a; i <= number_b; i++) {
        result[n] = i;
        n++;
    }
  }
  return result;
}

module.exports = get_integer_interval;

