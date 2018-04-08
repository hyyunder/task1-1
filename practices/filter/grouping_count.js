'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var re=[];
  var result={};
  var n=0;
  for(var j=0;j<collection.length;j++){
    if(re.indexOf(collection[j])==-1){
      re[n] = collection[j];
      n++;
    }
  }
  for(var j=0;j<re.length;j++) {
    var count=0;
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] == re[j]){
        count++;
      }
    }
    result[re[j]]=count;
  }
  return result;
}

module.exports = grouping_count;
