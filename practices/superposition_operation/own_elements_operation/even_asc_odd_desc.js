'use strict';
var even_asc_odd_desc = function(collection){
  var re1=[],re2=[],result=[];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0) re1.push(collection[i]);
    else re2.push(collection[i]);
  }
  for(var i=0;i<re1.length-1;i++){
    for(var j=i;j<re1.length;j++){
      if(re1[i]>re1[j]){
        var temp=re1[i];
        re1[i]=re1[j];
        re1[j]=temp;
      }
    }
  }
  for(var i=0;i<re1.length-1;i++){
    for(var j=i;j<re2.length;j++){
      if(re2[i]<re2[j]){
        var temp=re2[i];
        re2[i]=re2[j];
        re2[j]=temp;
      }
    }
  }
  for(var i=0;i<re1.length;i++){
    result.push(re1[i]);
  }
  for(var i=0;i<re2.length;i++){
    result.push(re2[i]);
  }
  return result;
};
module.exports = even_asc_odd_desc;
