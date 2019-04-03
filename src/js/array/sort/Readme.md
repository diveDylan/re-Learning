# 用法

> 对原数组进行排序，并返回原数组（更改原数组），内置的默认sort排序方式是将每一项转成string，然后比较他们在UTF-16的序列码


# Syntax

> arr.sort([compareFunction])


* @params [compareFunction] optional
   * **compareFunction(firstEl, secondEl)**

* @return sorted array

> compareFunction 存在的情况，将会根据该函数的返回值进行排序
> **所有未定义的元素将不调用compareFunction 排在最后面**

> **compareFunction(a,b)返回值小于0, a在b前**

> **compareFunction(a,b)返回值大于0, b在a前**

> **compareFunction(a,b)返回值等于0,保持不变，浏览器实现差异**

> 如果返回值不符合如上情况，排序顺序将是undefined


<--- log funtion --->
```
// print test result call the Array.prototype.sort
// no need to write console.log method

if(!Array.prototype.mySort) {
  Array.prototype.mySort = function () {
    let result = Array.prototype.sort(this, [...arguments])
    console.log(result)
    return result
  }
}


@ compareFunction 
function compareFunction(a,b) {
  // 这样的写法是不被允许
  return 1 or -1 or 0
}

function compareFunction(a,b) {
  if(a > b) {
    return 1 
  }
  if(a < b) {
    return -1
  }
  else return 0

  return a -b // 1
  return b -a // -1
}
```

# example
* 从小到大:   arr.sort((a, b) => a - b)
* 从大到小:   arr.sort((a, b) => b - a)
* 对象引用类型的比较

```

const objArr = [
  { id: 2, value: '2d'},
  { id: 4, value: '4d'},
  { id: 3, value: '3d'}
]

objArr.sort((a, b) => a.id - b.id) // id 从小到达排序

```

