'use strict';
var calculate_average = function(collection){
  var avg=0;
  var num=0;
  for(var i=1;i<collection.length;i=i+2){
    avg=avg+collection[i];
    num++;
  }
  avg=avg/num;
  return avg;
};
module.exports = calculate_average;
