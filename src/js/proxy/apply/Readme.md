# 定义
提供函数调用的陷阱

# Syntax
```
new Proxy(target, {
  apply: function(target, thisArg, argumentsList) {

  }
})
```

* target： 目标对象(必须可调用，是一个构造对象。 )
* thisArg: 调用的this参数
* argumentsList 调用的参数列表
* apply方法可以return 任何值
```
<!-- 报错 -->
 const proxy = new Proxy(1, handler)
 const proxy = new Proxy('1', handler)
 const proxy = new Proxy(true, handler)
 new Number(1)等可以

```

# 用法
可拦截这些的操作
* proxy(...args)代理函数的执行
* Function.prototype.apply() & call()
* Reflect.apply()

