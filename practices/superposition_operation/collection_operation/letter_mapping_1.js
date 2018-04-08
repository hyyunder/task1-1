'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var result=[];
  for(var i=0;i<collection[i];i++){
    if(collection[i]%2==0){
      var re;
      re=String.fromCharCode(96 + collection[i]);
      result.push(re);
    }
  }
  return result;
}

module.exports = even_to_letter;
