'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
    var ary = collection.split('->').sort(function (a,b) {
      return a - b;
    });//将collection分割成数组，对新数组进行排序
    var lowMiddle = Math.floor((ary.length - 1) / 2);//下标下舍入
    var highMiddle = Math.ceil((ary.length - 1) / 2);//下标上舍入
    return (Number(ary[lowMiddle]) + Number(ary[highMiddle])) / 2;

}

module.exports = compute_chain_median;
