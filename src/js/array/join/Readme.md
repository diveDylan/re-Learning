# 定义
join方法创建并返回一个根据指定分隔字符串联的新字符串，可作用于数组和array-like object


# Syntax

> arr.join([separator])

* separator 分隔符，如果为空则使用','串联
* return 一个串联的新字符串，null和undefined 则转成空拼接


# example
* **如果separator不是字符串，会调用separator.toString后再执行join方法**
```
const arr = [1,2,3]
arr.join() // '1,2,3'
arr.join('-') // '1-2-3'
arr.join([1,2,3]) // '11,2,321,2,33'
arr.join({name: 1}) // 1[object Object]2[object Object]3
```

* **join方法会对数组的每一项调用toString方法，除null、undefined会转为''， symbol则会报错, 所以join是不可逆，无法逆推会数组**
> Array.prototype.toString会扁平数组，不是join方法应该是toString扁平了数组
```
/**
* 数组的null、undefined会转为'',其他则调用toString方法：true-->true object --> [object Object] arr --> flat(infinity)
*/
const arrNullOrUndefined = [null, '', undefined, true, {a:1},[1,2,3]]
arrNullOrUndefined.join()
```

* 可用于array-like Object
```
// use in array-like object
const arrObj = {
  0: true,
  1: null,
  2: [1,2,3],
  length: 3
}

function joinArrayLike(obj, separator) {
  return Array.prototype.join.call(obj, separator)
  
}

joinArrayLike(arrObj, '-') // true--1,2,3

```
