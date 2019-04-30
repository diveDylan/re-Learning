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