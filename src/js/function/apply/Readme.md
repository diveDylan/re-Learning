# 定义
> function.prototype.apply
apply 方法使用指定的this对象调用一个函数,参数是一个数组或者伪数组对象

> 对象继承使用
<!-- 继承构造函数只继承属性不继承原型 -->

# Syntax
```
function.apply(thisArg, [argsArray])
/**
* @params thisArg this对象 会默认转成对象
* --

* @params [arsArray] 参数对象(array, array-like object)
*/

```
# example

```
/**
* all functions below can rewrite by call or bind
*/
// 将伪数组转为数组，或者copy数组
function copyArr(arr) {
  return Array.prototype.slice.apply(arr)
}
// or can use _slice for reused Array.prototype.slice
let _slice = Array.prototype.slice
function copyArr(arr) {
  return _slice.apply(arr)
}
// 检测是否含有自身属性
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.appy(obj, [key])
}

// 求数组的最小值
function getMinOfArray(arr) {
  return Math.min.apply(null,arr)
}
// 求数组的最大值
function getMaxOfArray(arr) {
  return Math.max.apply(null, arr)
}
```


