function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  var n=0;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      for(var m=0;m<collection_b[j].length;m++){
        if(collection_a[i]==collection_b[j][m]){
          result[n]=collection_a[i];
          n++;
          break;
        }
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
