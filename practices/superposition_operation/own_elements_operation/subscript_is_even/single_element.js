'use strict';
var single_element = function(collection){
  var re=[],count=[],num=0,result=[];
  for(var i=1;i<collection.length;i+=2){
    re.push(collection[i]);
  }
  for(var i=0;i<re.length;i++){
    num=0;
    for(var j=0;j<re.length;j++){
      if(re[i]==re[j]){
        num++;
      }
    }
    count.push(num);
  }
  for(var i=0;i<re.length;i++){
    if(count[i]==1){
      result.push(re[i]);
    }
  }
  return result;
};
module.exports = single_element;
