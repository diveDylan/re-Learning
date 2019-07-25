## 函数是编程

### 纯函数

相信你已经听过无数次，在javascript语言中函数是`一等公民`，也相信你在使用框架开发的过程中一定这样写过
```
<!-- exmaples from react -->
clickHandler = (e) => {
  // do something
}
<div onClick={ (e) => clickHandler(e) }></div>

// better
<div onClick={ clickHandler }></div>
```
这样整个工程的代码量会减少很多，接下来我们聊聊纯函数，纯函数的定义
>纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

用`Array`类型举例，所有`Array`的方法都基本上会注明是否影响原数组，这里的纯函数可以简单理解为不影响原数组，即我们常说的没有副作用，更简单的说，纯函数就是数学上的函数。所谓的函数式编程我们追求的是可靠的，无副作用的，输出指定一定能返回指定结果的函数。
下面代码优化的例子就是讲一个函数慢慢变纯的列子

```
/**
 * 纯函数
 * 可移植性
 * vue taiwan date-picker component
 * methods changes displayPicer value
 */
formatTaiwanTime(time) {
  if (!time) this.displayPicker = ''
  const datePicker = time.split('-')
  const year = datePicker[0] - 1911
  const month = datePicker[1]
  const day = datePicker[2]
  this.displayPicker = year + '/' + month + '/' + day
}

<!-- 优化 这里的函数单一职责只完成日期转化，不对任何组件有任何影响 -->
function formatTaiwanTime(time) {
  if (!time) return ''
  const datePicker = time.split('-')
  const year = datePicker[0] - 1911
  const month = datePicker[1]
  const day = datePicker[2]
  return year + '/' + month + '/' + day
}
<!-- methods -->
formatTaiwanTime,

```

### curry function 柯里化
> 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

这个应该算是2019年高频的面试题之一了，我们从最简单的一个列子说起
```
<!-- es5  -->
var add = function (x) {
  return function(y) {
    return x + y
  }
}
// equal es6
const add = (x) => (y) => x + y

var addOne = add(1)
addOne(4) // 5
```
这里我们定义了一个`add`函数，这个函数里面利用闭包原理将`x`储存在函数内部，并返回一个新的函数，这其实是一个最简单的柯里化函数了。<br/>
我们常见的curry函数的期待的效果应该是这样 `curry(add)(1)(2)(3)(4) `or `curry(add)(1,2,3,4)`
我们这里新建这个`curry`函数， 根据函数传参长度进行柯里化
```
function add(a, b, c, d) { return a + b + c + d }
function curry (fn) {
  let args = Array.from(arguments).slice(1)
  console.log(arguments, fn.length, args, args.length)
  return function () {
    args = args.concat(...arguments)
    if (args.length !== fn.length) return curry(fn, ...args)
    return fn(...args)
  }
}
curry(add)(1)(2)(3)(4)

```
我们用es6优化这个函数
```
const curryES6 = (fn, arg=[]) =>
   (...args) =>
   [...args, ...arg].length === fn.length ?
   fn(...args, ...arg) 
   : curryES6(fn, [...args, ...arg])

```
当然我们可以手动设置等待次数`fn.length`，指定函数等待时机结合数组的`reduce`返回处理的数值


### 组合compose

```
// can not accept params
const compose = (f, g) => f(g())

// params functions
const compose = (f, g) => (x) => f(g(x))

```
`compose`管道返回了一个新的函数，这个函数有这么几个特点：可以传参，`x`更像一个在管道中运输的值，由两个函数结合而成，从右到左的数据流。

我们创建两个函数`getName`获取用户姓名，`greeting`输出hello + name，这种情况两个函数的结合就非常适合使用`compose`
```
// get name of a object
const getName = (x) => x.name

// get location
const greeting = (x) => `hello ${x}`


const greetingName = compose(greeting, getName)

greetingName({ name: 'dylan' })

```
但是本地开放中我们经常需要log一些日志，调式我们的函数，比如上面的`greetingName`
我们在控制台中输出它的结果
```
// 常规做法
console.log(greetingName({ name: 'dylan' }))

// 可复用方法
const log = (x) => console.log(x)
const composeLog = compose(log, greetingName)
composeLog({ name: 'dylan' })
```
我们会发现一个相当有意思的公式，在保证从右到左的函数顺序时下面的结果是一样的，对我们编写可变组合的程序时非常重要的，而且任何函数分组都是可拆分的，极大的增加可维护性
```
composeLog = compose(log, compose(greeting, getName)) = compose(compose(log, greeting), name)
```


