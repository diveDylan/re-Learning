### 构造函数
构造函数是创建对象常用的方式之一，对象是JS中非常重要的一个概念。理解构造函数对原型和对象还有设计模式都会有很大的帮助
常见的构造函数方式
```js
// ES5
function Person(age) {
  this.age = age
  return this // default return value
}
Person.prototype.say = () => {
  console.log('hello')
}

Class Person {
  constructor(age) {
    this.age = age
    return this // default return value 
    // return `Boolean`,`Number`, `null`, `undefined` mean the same with this
  }
  // propotype here
  say = () => {
    console.log('hello')
  }
}
```
构造函数里面通过`new` 调用会有默认值返回值(`this`，特别注意的是更改默认值为`Boolean`,`Number`, `null`, `undefined`)不会改变返回值
### new
[MDN new opertator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
`new`是`js`系统的关键字。后面第一个参数一个指定对象实例的类型的构造函数，第二个参数为构造函数的入参
new 关键字会进行如下的操作：
1. 创建一个空的简单JavaScript对象（即{}）；
2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；
3. 将步骤1新创建的对象作为this的上下文 ；
4. 如果该函数没有返回对象，则返回this。

```js
// diy new 
const diyNew = (fn, args) => {
  const obj = {}
  obj.prototype = Object.create(fn.prototype)
  fn.call(obj, args)
  obj.__proto__ = Object.create(fn.prototype)
  // or Object.setPrototypeOf(Obj, Object.create(fn.prototype))
  return obj
}
```

### 理解contructor和new的用处
####  代理模式
```js
class Person {
  constructor(age) {
    this.age = age
    /**
     * trapper
     * 禁止原型赋值
     * setPrototypeOf: function(target, prototype) {
     *    return false
     *  }
     * }
     * // 禁止删除属性
     * deleteProperty: function(target, property) {
     *   return false
     * }
     * // 严禁复写属性
     * set: function(target, property, value, receiver) {
     *    if(target.hasProperty[property]) {
     *      thorw Error('permission denied')
     *    } else {
     *       Reflect.set(target, prop, value, recevier)
     *    }
     * }
    */
    return new Proxy(this, trapper)
  }
}

```

#### 单例模式
单例模式保证全局只有一个实例，避免对象重复创建的成本，暴露的是是实例对象，没有直接暴露类的构造函数更加安全可靠不可更改
```js
class Person {
  constructor() {
    // 返回存在实例
    if (Person.instance) return Person.instance
    this.age = 22
    Person.instance = this
    return Person.instance 
  }
  static _instance = null
}
```

