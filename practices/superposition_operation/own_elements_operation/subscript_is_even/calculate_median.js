'use strict';
var calculate_median = function(collection){
  var num=0;
  var re=[];
  var result=0;
  for(var i=1;i<collection.length;i=i+2){
    num++;
  }
  if(num%2==1){
    for(var i=1;i<collection.length;i=i+2){
      re.push(collection[i]);
    }
    result=re[Math.floor(re.length/2)];
  }else{
    for(var i=1;i<collection.length;i=i+2){
      re.push(collection[i]);
    }
    var high=re[Math.floor(re.length/2)];
    var min=re[Math.floor(re.length/2)-1];
    result=(high+min)/2;
  }
  return result;
};
module.exports = calculate_median;
