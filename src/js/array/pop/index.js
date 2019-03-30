

const arr = [1, 2, 3, 4]
// console.log中执行的操作仍改变了原数组
console.log(arr.pop(), arr)
console.log(arr)

/**
 * pop on array-like objects
 */

const normalObj = {
  a: 1,
  b: 2,
  c: 3,
  length: 3
}

function pop(val) {
  return Array.prototype.pop.call()
}