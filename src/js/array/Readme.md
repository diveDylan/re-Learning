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


## [pop](./pop/Readme.md)
> 删除一个数组的最后一个元素，并返回这个元素```arr.pop()```，若数组为空则返回undefined

## [shift](./shift/Readme.md)

> 移除数组的第一个元素，返回移除的元素（空数组会返回undefined），改变原数组

 * [可扩展flat polyfill](./shift/Readme.md)


## [sort](./sort/Readme.md)
> 对原数组进行排序，并返回原数组（更改原数组），内置的默认sort排序方式是将每一项转成string，然后比较他们在UTF-16的序列码

* [规则和写法有一定的注意点](./sort/Readme.md)

## [slice](./slice/Readme.md)
> slice() 方法返回一个新的数组对象，一个由 begin和 end（不包括end）决定的浅拷贝。不改变原数， 传参允许负数
```
<!-- 数组拷贝 -->
function copyArr(arr) {
  return Array.prototype.slice.call(arr)
}
```

## [splice](./splice/Readme.md)
>splice 会移除数组的元素，或者替换，新增, 改变原数组，返回移除元素组成的数组

**[具体用法](./splice/Readme.md)**
* concat polyfill
* 传参注意点

## [fill](./fill/Readme.md)
> 数组元素的填充 使用fill object, 赋值的是同一个引用类型 会影响整个数组的赋值

## [isArray](./isArray/Readme.md)
> 是不是数组的判断
[一些例子和polyfill](./isArray/Readme.md)


## [reduce](./reduce/Readme.md)
> 根据提供reducer函数进行升序执行，并将结果汇总成一个值返回

具体内容[reduce 学习](./reduce/Readme.md)：
* 基本语法
* 执行顺序
* 高级函数
* flat polyfill


## [push](./push/Readme.md)
> push 方法在数组尾部增加一个或者多个元素，并返回数组的长度，改变原数组

> 在array-like object 中使用push


## [from](./from/Readme.md)

> 通过一个可迭代的对象或者array-like object创建一个数组(浅拷贝)

## [map](./map/Readme.md)

> map()方法创建一个新的数组，并且在原数组每个元素上上调用回调函数, 不改变原数组


## [join](./join/Readme.md)

> join方法创建并返回一个根据指定分隔字符串联的新字符串，可作用于数组和array-like object