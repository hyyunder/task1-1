function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var sum=0;
  for (var i =0; i < collection_a.length; i+=sum) {
    var num=0;
    for (var j = 0; j < collection_a.length; j++) {
      if (collection_a[i] == collection_a[j]) {
        num++;
      }
    }
    if(collection_a[i].indexOf("-") ==true){
      num=Number(collection_a[i].split("-")[1]);
    }
    var re = {key: collection_a[i].split("-")[0], count: num};
    result.push(re);
    for(var k=0,sum=0;k<result.length;k++){
      sum+=result[k].count;
    }
    i=0;
  }
  for(var i=0;i<result.length;i++) {
    if (object_b.value.indexOf(result[i].key) >= 0) {//如果collection[i]在object.value时
      if (result[i].count >= 3) {//判断collection[i]的个数大于3，修改num
        result[i].count  = result[i].count  - parseInt(result[i].count  / 3);
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
