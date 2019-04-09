# 定义
根据提供reducer函数进行升序执行，并将结果汇总成一个值，返回

# syntax

```
arr.reduce(callback[,initValue])

/**
* @params callback(accumulator, currentValue, currentIndex, array)
*        * accumulator 累加器，累加每次执行的值，若提供initValue则初始为initValue,函数调用 从0开始，否则初始值为数组的第一项，函数从1开始调用
*        * currentValue 当前函数调用的数组当前项
*        * currentIndex 当前函数调用的数组当前下标
*        * array 调用执行的数组
* @params initValue 函数执行的初始值
*         不提供将使用数组的第一个元素作为initValue; 数组为空且未提供初始值，会报错
*/

```
# examples
```
const arr = [1,2,3,4,5]

// 不提供initValue 从下标1开始回调，函数执行 length -1次
arr.reduce((a,b,c,d) => {
  console.log(a,'current:',b,c,d)
  return a + b
})

// 提供initValue, 从下标0开始，函数执行length次
arr.reduce((a,b,c,d) => {
  console.log(a,'current:',b,c,d)
  return a + b
}, 1)


```

**执行顺序**<br/>
* 无初始值执行顺序
![无初始值执行顺序](../../../../static/img/reduceWithoutInitValue.png)
* 有初始值执行顺序
![有初始值执行顺序](../../../../static/img/reduceWithInitValue.png)

