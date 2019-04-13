// 全局测试函数

if(!Array.prototype.myPush) {
  Array.prototype.myPush = function () {
    let a = Array.prototype.push.call(this, ...arguments)
    console.log(a, this)
    return a 
  }
}

const arr = [1, 2, 3]

arr.myPush(4,5)
arr.myPush(6)
arr.myPush()

// use in array-like object
// if no length is given, push will set length from 0
let obj = {
  a:'b',
  0: 'a',
  1: 'b',
  2: 'c',
  'push': Array.prototype.myPush

}

obj.push('d') // 1 {0: "d", 1: "b", 2: "c", a: "b", push: ƒ, length: 1}

let objLen = {
  a:'b',
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  'push': Array.prototype.myPush
}

objLen.push('d') // 4 {0: "a", 1: "b", 2: "c", 3: "d", a: "b", length: 4, push: ƒ}
objLen.push('e','f') // 6 {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", a: "b", length: 6, push: ƒ}

