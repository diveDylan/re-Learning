# 数组的一些基本方法

> [el, el, el, el]

> new Array(length) el is empty not null or undefined

> new Array(el,el,el)


# array-like objects

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)

> 格式行为像数组却没有共享数组的所有方法
> 可以通过apply/call/bind 调用数组原型上的方法
> 常见的有DOM NodeList 和函数的入参arguments

```
// 输出函数的入参
function printArguments() {
  console.log(arguments)
  return Array.prototype.forEach.call(arguments, (item) => console.info(item));
}
```


## pop
> 删除一个数组的最后一个元素，并返回这个元素```arr.pop()```，若数组为空则返回undefined

## 