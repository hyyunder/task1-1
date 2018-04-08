function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var sum=0;
  for (var i =0; i < collection.length; i+=sum) {
    var num=0;
    for (var j = 0; j < collection.length; j++) {
      if (collection[i] == collection[j]) {
        num++;
      }
    }
    var re = {key: collection[i], count: num};
    result.push(re);
    for(var k=0,sum=0;k<result.length;k++){
      sum+=result[k].count;
    }
    i=0;
  }
  return result;

}

module.exports = count_same_elements;
