# 定义
移除数组的第一个元素，返回移除的元素（空数组会返回undefined），改变原数组


# Syntax

> arr.shift()


# example

```

/**
 * global test function
 */

if(!Array.prototype.myShift) {
  Array.prototype.myShift = function() {
    let a = Array.prototype.shift.call(this)
    console.log(a, this)
    return a
  }
}

```
# polyfill of flat
```
/**
 * shift 每次都返回元素无限shift即可flat
 */
function flatByShift(arr,brr=[]) {
  arr.map((i) => {
    if(Array.isArray(i)) {
      flatByShift(i, brr)
    }else {
      brr.push(i)
    }
  })
  console.log(brr)
  return brr
}

/**
 * 支持step,默认为1
 */
function flatByShiftStep(arr, step=1, brr=[], start =0) {
    arr.map((i) => {
      if(Array.isArray(i) && start < step ) {
        // 只能针对一个index 
        start++
        flatByShiftStep(i,step, brr,  start)
        // 下一项从新开始
        start --
      }else {
        brr.push(i)
      }
    })
    return brr
}
```