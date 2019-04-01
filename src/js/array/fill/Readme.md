# 定义

> arr.fill(val, start=0, end=arr.length)

> return 改变的数组(改变原数组)

> start & end 可以是负数

>  使用fill object, 赋值的是同一个引用类型 会影响整个数组的赋值

```
// examples

var arr = Array(3).fill({name: 'dylan'})

// all name changes 

arr[0].name = 'zeng'
```