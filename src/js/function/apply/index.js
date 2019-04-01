

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
  console.log('person say ...', this.name)
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

// 以下代码实现apply
if(!Function.prototype.myApply) {
  // 为了更完美定义function 
  // 初始默认this为window
  Function.prototype.myApply = function (content=window, args) {
    content.fn = this // 指向当前函数
    // 执行该函数
    /**
     * apply api中arg是伪数组
     */
    args = args ? Array.prototype.slice(args) : []
    let res = content.fn(...args)
    delete content.fn
    return res
  }
}


function myCopy() {
  return Array.prototype.slice.myApply(arguments)
}



console.log(myCopy([1,2,3]))

const girl = new Person({
  name: 'girl',
  age: 'young'
})
const dylan = {name: 'dylan'}
girl.say.myApply(dylan)


function Swimmer(name, gender) {

    this.name = name
    this.gender = gender

}

class MaleSwimmer {
  constructor(props) {
    Swimmer.myApply(this,[props] )
  }
}

let r = new Swimmer('ren', 'female')

let y = new MaleSwimmer('dylan')

console.log(r, y)

function logThis() {
  console.log(this, 'logThis')
}

logThis()
logThis.myApply(r)