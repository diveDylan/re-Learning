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