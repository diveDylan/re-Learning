

function test(a, b ) {
  console.log(this, arguments)
  return 3;
}

function applyFn(fn,val, ...arguments) {
  console.log(fn.apply(val, [...arguments]))
  return fn.apply(val, [...arguments])
}
applyFn(test,1) // Number {1}
applyFn(test, 'test') // String {test}
applyFn(test, [1]) //[1]
applyFn(test, new Array(1)) //[empty]
applyFn(test, Symbol(1)) // Symbol {Symbol(1)}
applyFn(test, new Set([1,2])) // Set(2){1,2}

// arg
applyFn(test,1,2,3)

// 一些妙用求最大数

applyFn(Math.max,null, 1,3,42,3)


function argSlice() {
  console.log(arguments, Array.prototype.slice.call(arguments))
  return Array.prototype.slice.apply(arguments)
}

argSlice(1,2,3)

argSlice.apply(null,[37,1,3,])
let argBind = argSlice.bind(null,37)
console.log(argBind)
argBind(1,2)

argSlice(Array.prototype)


// use in class or Function 
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log('person say ...')
}
function Man() {
  // here we cannot apply the prototype
  Person.apply(this)
}

function Woman() {
  Person.apply(this, arguments)
}

let zeng = new Man(22,22)
let ren = new Woman('Renyi', 22)

console.log(zeng, ren)


class Child {
  static type = "child"
  constructor() {
    Person.apply(this, arguments)
   
  }
  walk() {

  }
}

class CatChild extends Child {
  static type = 'cat'
  constructor() {
    super(...arguments)
    
  }
  miao() {

  }
}
let my = new Child('meiyuan', 1)
let cat = new CatChild('ouyuan', 1,2)

console.log(my, cat)