# 定义

> proxy 是js的内置对象, 用于自定义代理对象的基本操作(如属性查找，赋值，枚举，函数调用等)<br/>
> **原则上对象代理后，不要直接在原对象上进行操作，所有操作都应该通过代理完成，保证所有操作都经过handler的trap**
# Syntax
 
> new Proxy(target, handler)

* target 被代理的对象可以是任何一个原生对象包括一个代理

* handler 一个对象，其属性是定义代理对象的执行操作的函数


# 术语

* handler
   > 陷阱的占位符

* traps
   > 属性访问的方法（拦截操作）,类似操作系统的陷阱

* target
   > 代理的虚拟对象。常用于在后面储存代理对象.根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）

# methods
[Proxy.revocable(target, handler)](./revocable/Readme.md);

<img src="../../../static/img/revocableProxy.png" width="800">

# 原型属性

<img src="../../../static/img/proxyProperty.png" width="500">

# examples

```
const obj = {
  a: '1',
  b: '2',
  c: '3'
}

let proxy = new Proxy(obj,{
  get: function(target, props){
    // here Object.is(target, obj): true
    return target[props]
  }
})
obj.a = 'a' // 引用类型
proxy.b = 'b' // 操作转发

console.log(proxy.a, obj.a); // a, a
console.log(proxy.b, obj.b); // b, b

```
<img src="../../../static/img/proxy.png" width="800">



## 

