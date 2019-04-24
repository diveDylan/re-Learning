# 定义

every()测试数组的所有元素是否通过了函数的测试

# Syntax
> arr.every(callback[, thisArg])

* callback function 测试函数: fn(element, index, array) // element 当前的数组项，index下标，array调用every的数组本身
* this对象, callback执行指定的this 不能更改callback的执行数组 **callback不能使用箭头函数的情况(this--> window)**
* 所有通过的情况下返回true 否则返回false


# Examples

```
<!-- log params  -->
const arr = [1,2,3,4]

arr.every(function(value, index, array) {
  console.log(this) // [2, 3, 4]
  console.log(value, index, array) // value --> 1 index --> 0 array --> [1,2,3,4]
  value > 1  // false 惰性不往下执行
}, [2,3,4] )


```


