# 定义
拦截属性获取的trap

# Syntax

```
var p = new Proxy(target, {
  get: function(target, property, receiver) {
    // traps here
    
  }
})
/**
* @params target 代理的目标对象
* @params property 拦截获取的属性可以是symbol
* @params receiver 代理指定的一个对象或者代理本身
*/
```

要遵循定义变量的一些配置是否可以更改值等


