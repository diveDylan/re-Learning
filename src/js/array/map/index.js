
if(!Array.prototype.myMap) {
  Array.prototype.myMap = function() {
    let a = Array.prototype.map.apply(this,arguments)
    console.log(a)
    return a
  }
}
const arr = [1, 2, 3]
const brr = [3,3,4]
// 传入thisArg不能使用箭头函数
const addOneArr = arr.myMap(function(i,index){
  console.log(this,i, index) // i, index,为arr的值
  return this[index] + 1
}, [3,3,4]) // [4, 4, 5]

/**
 * 争议的引用类型，引用类型中每一项的指针未改变，值改变会同时影响新老数组
 */

let a = {
  name: 'dylan'
}

const arrObj = [a,a,a]

const arrObj2 = arrObj.myMap((i) => i)
const arrObj3 = arrObj.myMap((i) => {
  // 引用类型的处理
  i.name = "dylan3"
  i.id = '3'
  return i
})
a.age = 27
console.log(arrObj, arrObj2)