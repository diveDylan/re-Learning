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

const arr = [1,2,3,4]

arr.myShift() // 1, [2,3,4]

new Array().myShift() // undefined []

const arr1 = [1, [2, [3,4], 5], 6]
const arr3 = [1, [2, [3,4], 5], 6]
const arr2 = [['1','2'],[3,[4,5,[6,7]]]]
/**
 * shift 每次都返回元素无线shift即可flat
 */
function flatByShift(arr,brr=[]) {
  // let _newArr = brr || []
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
flatByShift(arr1)
flatByShift(arr2)

/**
 * 支持step,默认为1
 */
function flatByShiftStep(arr, step=1, brr=[], start =0) {
  // console.log('start:', brr)
    arr.map((i) => {
      if(Array.isArray(i) && start < step ) {
        // 只能针对一个index 
        start++
        console.log(start, brr)
        flatByShiftStep(i,step, brr,  start)
        // 下一项从零开始
        start --
      }else {
        brr.push(i)
      }
    })
    console.log(brr)
    return brr
}
flatByShiftStep(arr3,1)
flatByShiftStep(arr2,3)
// flatByShiftStep(arr2,2)
// flatByShiftStep(arr2,3)