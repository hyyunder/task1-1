'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var result;
  var num;
  if(collection.length%2==1){
    num=collection[Math.ceil((collection.length)/2)];
  }else{
    var highnum=collection[Math.ceil((collection.length)/2)];
    var minnum=collection[Math.floor((collection.length)/2)];
    num=Math.ceil((highnum+minnum)/2);
  }
  if((num+96)>148){
    result = 'b';
    var re;
    re = String.fromCharCode(96 + num - 52);
    result+=re;
  }else if((num + 96) > 122&&(num+96)<=148) {
    result = 'a';
    var re;
    re = String.fromCharCode(96 + num - 26);
    result+=re;
  }else {
    result = String.fromCharCode(num+96);
  }
  return result;
}

module.exports = median_to_letter;
