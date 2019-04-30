# 定义
`repeat()`方法返回一个指定重复次数的字符

# Syntax

> str.repeat(count)

* count 必须非负的整数

* count 不传返回空

* 非整数 str.repeat(Math.floor(count))
 
# Examples

```
// 使用转义越过 '闭合标签的问题
const str = 'I \'m dylan '

str.repeat() // 空
str.repeat(-1) // RangeError
str.repeat(0) // 空
str.repeat(1) // I'm dylan 
str.repeat(1.8) // 1、Math.floor(1.8) 2、output: I'm dylan 
str.repeat(2) // I'm dylan I'm dylan 
```
## arr or object use repeat
```
/**
 * step 1: f --> f.toString()
 * step 2: String.prototpye.repeat.call(f.toString(), count)
 * 
 */
function repeat(f) {
  const a = String.prototype.repeat.call(f, 1)
  console.log(a)
  return a
}
const arr = [1,2,3]
repeat(arr) // 1,2,3
arr.toString = () => 'add'
repeat(arr) // add
const obj = {
  toString: () => 'dylan'
}
repeat(obj)

```