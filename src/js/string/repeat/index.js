// 使用转义越过 '闭合标签的问题
const str = 'I\'m dylan '

str.repeat() // 空
// str.repeat(-1) // RangeError
str.repeat(0) // 空
str.repeat(1) // I'm dylan 
str.repeat(1.8) // 1、Math.floor(1.8) 2、output: I'm dylan 
str.repeat(2) // I'm dylan I'm dylan 

/**
 * step 1: f --> f.toString()
 * step 2: String.prototpye.repeat.call(f.toString(), count)
 * 
 */

function repeat(f) {
  const a = String.prototype.repeat.call(f, 1)
  console.log(a)
  return a
}
const arr = [1,2,3]
repeat(arr) // 1,2,3
arr.toString = () => 'add'
repeat(arr) // add
const obj = {
  toString: () => 'dylan'
}
repeat(obj)