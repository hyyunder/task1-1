'use strict';
var even_group_calculate_average = function(collection){
  var re=[],re1=[],re2=[],re3=[],result=[],sum=0;
  for(var i=1;i<collection.length;i+=2){
    if(collection[i]%2==0)
      re.push(collection[i]);
  }
  if(re.length==0){
    result=[0];
  }
  for(var i=0;i<re.length;i++) {
    if (re[i] / 10 < 1) {
      re1.push(re[i]);
    }else if(re[i]/100<1){
      re2.push(re[i]);
    }else{
      re3.push(re[i]);
    }
  }
  for(var i=0;i<re1.length;i++){
    sum+=re1[i];
  }
  if(sum!=0){
    result.push(sum/re1.length);
  }
  sum=0;
  for(var i=0;i<re2.length;i++){
    sum+=re2[i];
  }
  if(sum!=0) {
    result.push(sum / re2.length);
  }
  sum=0;
  for(var i=0;i<re3.length;i++){
    sum+=re3[i];
  }
  if(sum!=0) {
    result.push(sum / re3.length);
  }
  return result;
};
module.exports = even_group_calculate_average;
