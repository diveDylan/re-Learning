# 定义
splice 会移除数组的元素，或者替换，新增, 改变原数组，返回移除元素组成的数组

# Syntax 

splice(start[, deleteCount[,item[,item...]]])

* params start 默认为0，如果大于数组长度length，则从length开始，如果为负数：
1、start + length > 0,则从length + start开始，列如：-1， length -1;<br/>2、start + length < 0，则从0开始

* params deleteCount 删除的个数<br/>
 1、如果不传deleteCount，则默认从start到length，或者更多，即deleteCount >= length - start(移除从开始位置后的所有元素)<br/>
 2、如果为0或者负数，将不移除任何元素，常用来新增元素

* params item  新增的元素，不指定则单纯的移除从start开始的deleteCount个元素


```
/**
 * 全局test 函数
 */
if(!Array.prototype.mySplice) {
  Array.prototype.mySplice = function () {
    let a = Array.prototype.splice.apply(this,arguments)
    console.log(a, this)
    return a
  }
}

<!-- concat polyfill -->
function myConcat(arr) {
  // 转为数组
  let args = Array.prototype.splice.call(arguments,1)
  // es6
  args = args.flat(1)
  // es5
  function flatOnce(arr) {
    let newArr = []
    for(var i = 0; i < arr.length; i ++) {
      (function(i, newArr){
        if(Array.isArray(arr[i])) {
          arr[i].forEach(i => {
            newArr.push(i)
          })
        }else {
          newArr.push(arr[i])
        }
      })(i,newArr)
    }
    return newArr
  }
  Array.prototype.splice.call(arr,arr.length, 0 ,...args)
  return arr
}

```


 

