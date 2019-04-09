# 定义

function 分两种构造方式

> 1、函数声明，会变量提升 function name() {}

> 2、函数表达式，定义时解析，var name = function () {}

> name 代表的是一个函数指针也可以理解为一种引用类型


# exmaple

```
// 引用类型
var sum = function (a,b) {
  return a + b
}
var copy = sum
sum = null
copy(2,3) // [5]


```