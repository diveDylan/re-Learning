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
通过第一个curry函数我们可以看出curry利用了两点闭包储存传参，传参不结束则返回函数，结束执行函数
