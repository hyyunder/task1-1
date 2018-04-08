function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  for(var i=0;i<collection_a.length;i++){
    if(object_b.value.indexOf(collection_a[i].key)>=0){
      if(collection_a[i].count>=3) {
        collection_a[i].count = collection_a[i].count - parseInt(collection_a[i].count/3);
        result.push(collection_a[i]);
      }else{
        result.push(collection_a[i]);
      }
    }else{
      result.push(collection_a[i]);
    }
  }
  return result;
}

module.exports = create_updated_collection;
