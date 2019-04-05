# 柯里化函数 即 函数编程

加入现在有一个函数如下:
```
function add(x,y) {
  return x + y
}

add(2,3) // 5
-- curry(2)(3) // 5
function add(x) {
  return function(y) {
    return x + y
  }
}
add(2)(3) // 5
add(1)(2)(3) // 则不合适
```
通过第一个curry函数我们可以看出curry利用了两点： 闭包储存传参，传参不结束则返回函数，结束执行函数

现在网上最流行的版本，根据function.length 判断结束时机，实现柯里化函数

[相关资料: MDN Function.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)


```
const curryLength = 
  (fn, arr=[]) => 
    (...args) => 
      arr.concat(args).length === fn.length ? 
      fn(...arr.concat(args)) : 
      curryLength(fn, arr.concat(args)) 

```

我这边想实现的无限传参，最后为空即运行
```
const curry = (fn, arr=[]) =>
  (...arguments) => 
    arguments.length === 0 ? fn(arr.concat(arguments)) :
    curry(fn, arr.concat(arguments))


// 网上curry面试题
function add(x,y) {return x + y}
curry((args) => args.reduce(add))(1)(2)(3)()

```

