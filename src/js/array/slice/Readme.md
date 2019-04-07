# 定义
slice() 方法返回一个新的数组对象，一个由 begin和 end（不包括end）决定的浅拷贝。不改变原数组。


# Syntax
slice([begin,[end]])

* params begin 开始截取的位置，包含开始，允许负数, begin 默认为0

* params end 截取结束的位置，不包含结束的位置， 允许负数， end 默认为length

* params 为负，即： bengin + length or end + length(length 为Array的长度)


```
<!-- 全局测试函数 -->
if(!Array.prototype.mySlice) {
  Array.prototype.mySlice = function () {
    let a = Array.prototype.slice.call(this, arguments)
    console.log(a)
    return a
  }
}
// examples

// copy array 
const arr = [ 1, '2', [3,4]]
arr.mySlice() // [ 1, '2', [3,4]]

// slice 不传begin默认copy，不传end默认为length
arr.mySlice(1) //["2", [3,4]]

// end < begin
arr.mySlice(1,0) // []

// 负数
arr.mySlice(-2, -1) // ['2']
```
