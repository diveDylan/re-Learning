# 定义

`construct` 方法是针对`new`操作符的陷阱。为了代理结果的有效性，传入的target一定要有`construct`方法(`new target is ok`)，必须返回一个对象

# Syntax
```
var p = new Proxy(target, {
  construct: function(target, argumentsList, newTarget) {

  }
})
```
 ## params
 * target 代理对象
 * argumentsList constructor传参列表
 * newTarget  生产的代理对象
  

## 可拦截的操作
* new proxy(...args)
* Reflect.construct()


# examples
```
<!-- create a null properties object -->
const nullObject = new Proxy(Object, {
  construct(target, args, newTarget){
    console.log('target:',target)
    console.log('args:',args)
    console.log('newTarget:',newTarget)
    let a = Object.create(null)
    // 如果传入object的情况
    args.forEach(i => Object.assign(a,i))
    return a
  },
  setPrototypeOf() {
    console.log('setting')
    // cannot set the nullObject properties
    throw new Error("nullObject's prototype cannot set")
  },
  getPrototypeOf() {
    return null
  },

})
Object.setPrototypeOf(nullObject, { name: null}) // throw a error
console.log(Object.getPrototypeOf(nullObject) === null) //true
let d = new nullObject({name:'dylan',age:18})
```