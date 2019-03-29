# 用法

> 判断一个对象是否是数组

> 返回一个Boolean

```
Array.isArray(value) 
```

# examples
```
Array.isArray([]) //true
Array.isArray(new Array()) //true
// Array.prototype itself is an array
Array.isArray(Array.prototype) // true

// all following calls return false
Array.isArray()
Array.isArray({})
Array.isArray(null)
Array.isArray(undefined)
Array.isArray(17)
Array.isArray('Array')
Array.isArray(true)
Array.isArray(new Uint8Array(32))
```


# polyfill

```
// polyfill
if(!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object, Array]'
  }
}
```