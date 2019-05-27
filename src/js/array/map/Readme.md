# 定义
> map()方法创建一个新的数组，并且在原数组每个元素上上调用回调函数, 不改变原数组


# Syntax
```
var new_array = arr.map(callbackFn[,thisArg])

/**
* @params callbackFn(element, index, array) {
*  return element for new_array
* }
*         index & array optional
* @params thisArg
*    执行callbackFn的this
*/

```
> callback is invoked only for indexes of the array which have assigned values, including undefined.
只有数组项被声明或者赋值才会被执行`callback`
```
/**
 *  Note: this implies an array of arrayLength empty slots, not slots with actual undefined values
 *  assigned value  or non-assign
 */
const nonAssigned = new Array(6)
nonAssigned.map(i => console.log(i))
```
# examples
> 便于维护、理解、尊重js的编程语言设定，理论上对于引用类型的项的处理尽量使用forEach不用map

```
/**
 * 争议的引用类型，引用类型中每一项的指针未改变，值改变会同时影响新老数组
 */

let a = {
  name: 'dylan'
}

const arrObj = [a]

const arrObj2 = arrObj.myMap((i) => i)

a.age = 27

console.log(arrObj, arrObj2) // [{name:'dylan', age: 27}] [{name:'dylan', age: 27}]

```
上面的列子看起来可能很不好理解，但是如果你清楚的知道什么是引用类型，你就会很清楚知道发生了什么，我们改造一下这个列子

```
const arrObj2 = arrObj.myMap((i) => {
  // i 在这里是引用类型a,这里进行引用类型的操作
  i.id = 2

  // 返回i的引用地址
  return i 
})

// 引用类型a的操作 这里和i指向同一个地址
a.age = 27

console.log(arrObj, arrObj2)// [{id:2, name:'dylan', age: '27'}] [{id:2, name:'dylan', age: '27'}]
```
这里arrObj数组的每一项保存的是**引用类型的地址**，map不改变原数组的原则即map不改变数组保存的值，这里保存的是地址或者说引用指针，指针指向内容区，引用类型内容区的改变映射到这个地址，地址指针并没用发生变，所以可以说map没有改变原数组。如果你足够了解引用类型，使用map当然是可以的，但是为了js的规则定义和代码易读性，建议使用forEach等方法改变原项