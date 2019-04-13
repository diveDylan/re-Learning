# 定义

> push 方法在数组尾部增加一个或者多个元素，并返回数组的长度，改变原数组

# Syntax

> arr.push(element1[,element2...])

# examples
在array-like object 中使用，不会将object转为数组，会在原长度上增加[key(length-1)]: value(value)
```
<!-- global function  -->
if(!Array.prototype.myPush) {
  Array.prototype.myPush = function () {
    let a = Array.prototype.push.call(this, ...arguments)
    console.log(a, this)
    return a 
  }
}
<!-- use in array-like object -->
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



```
