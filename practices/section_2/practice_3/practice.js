function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  for (var i =0; i < collection.length; i++)
  {
    var num=0;
    for (var j = 0; j < collection.length; j++) {
      if (collection[j].indexOf("-") == true && (collection[j].split("-")[0] == collection[i])) {
        console.log(collection[j].split("-")[0]);
        num += Number(collection[j].split("-")[1]);
        console.log("*1", num);
      } else if (collection[j].indexOf("[") == true && (collection[j].split("[")[0] == collection[i])) {
        console.log(collection[j].split("[")[0]);
        num += Number(collection[j].split("[")[1].split("]")[0]);
        console.log("*2", num);
      } else if (collection[j].indexOf(":") == true && (collection[j].split(":")[0] == collection[i])) {
        console.log(collection[j].split(":")[0]);
        num += Number(collection[j].split(":")[1]);
        console.log("*3", num);
      } else if ((collection[i] == collection[j]) && (collection[j].length == 1)) {
        num++;
      }

    }
    console.log(collection[i], ":", num);
    if (result.length == 0) {
      var re = {name: collection[i], summary: num};
      result.push(re);
    } else {
      var n = 0;
      for (var k = 0; k < result.length; k++) {
        if(collection[i].split("-")[0]==result[k].name){
          n=1;
          break;
        }else if(collection[i].split(":")[0]==result[k].name){
          n=1;
          break;
        }else if (collection[i].split("[")[0]==result[k].name){
          n=1;
          break;
        }else if(collection[i] == result[k].name) {
          n = 1;
          break;
        }
      }
      if (n == 0) {
        if(collection[i].indexOf(":")==true){
          num+=Number(collection[i].split(":")[1]);
          var re = {name: collection[i].split(":")[0], summary: num};
          result.push(re);
        }else if(collection[i].indexOf("-")==true){
          num+=Number(collection[i].split("-")[1]);
          var re = {name: collection[i].split("-")[0], summary: num};
          result.push(re);
        }else {
          var re = {name: collection[i], summary: num};
          result.push(re);
        }
      }
    }
  }
  return result;
}

module.exports = count_same_elements;
