'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=[];
  var n=0;
  if(number_b<number_a){
    for (var i = number_a; i >= number_b; i--) {

      if((i+96)>148){
        result[n] = 'b';
        var re;
        re = String.fromCharCode(96 + i - 52);
        result[n]+=re;
        n++;
      }else if((i + 96) > 122&&(i+96)<=148) {
        result[n] = 'a';
        var re;
        re = String.fromCharCode(96 + i - 26);
        result[n]+=re;
        n++;
      }else {
        result[n] = String.fromCharCode(i+96);
        n++;
      }
    }
  }else {
    for (var i = number_a; i <= number_b; i++) {

      if((i+96)>148){
        result[n] = 'b';
        var re;
        re = String.fromCharCode(96 + i - 52);
        result[n]+=re;
        n++;
      }else if((i + 96) > 122&&(i+96)<=148) {
        result[n] = 'a';
        var re;
        re = String.fromCharCode(96 + i - 26);
        result[n]+=re;
        n++;
      }else {
        result[n] = String.fromCharCode(i+96);
        n++;
      }
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

