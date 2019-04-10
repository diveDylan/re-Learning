# 这是一个温习知识的项目

> issuse 文件夹代表面试题

> 目前主要温习js

> 起服务 python -m SimpleHTTPServer 8081

# JS目录
## [正则基础](./src/js/regExp/Readme.md)
> 匹配元字符，转义，限定字符，捕获

## [正则秒用](./src/js/regExp/skill.md)
> 数字格式化，过滤敏感字，去除空项

## [数组方法](./src/js/array/Readme.md)

* [Array.prototype.fill](./src/js/array/fill/Readme.md)
  
> fill 指定下标填充数组，返回填充的数组，改变原数组fill引用类型的情况


* [Array.prototype.isArray](./src/js/array/isArray/Readme.md)

> 判断是否为数组 Array.prototype是数组， Uint8Array返回false， api的polyfill

* [Array.prototype.pop](./src/js/array/pop/Readme.md)

> arr.pop() 移除数组的最后一个元素，并返回最后一个元素, 改变原数组

* [Array.prototype.reduce](./src/js/array/reduce/Readme.md)

> reduce的调用顺序，高级函数pipe，compose， Array.prototype.flat的polyfill,
返回一个累加值

* [Array.prototype.shift](./src/js/array/shift/Readme.md)

> 移除数组的第一个元素，返回移除的元素（空数组会返回undefined），改变原数组， Array.prototype.flat的polyfill,

* [Array.prototype.slice](./src/js/array/slice/Readme.md)
> slice() 方法返回一个新的数组对象，一个由 begin和 end（不包括end）决定的浅拷贝。不改变原数组。传参允许负数，常用于copy Array

* [Array.prototype.sort](./src/js/array/sort/Readme.md)

> 对原数组进行排序，并返回原数组（更改原数组），内置的默认sort排序方式是将每一项转成string，然后比较他们在UTF-16的序列码; function的写法，排序方式


* [Array.prototype.splice](./src/js/array/splice/Readme.md)
>splice 会移除数组的元素，或者替换，新增, 改变原数组，返回移除元素组成的数组; concat的polyfill



## 对象Objcet



