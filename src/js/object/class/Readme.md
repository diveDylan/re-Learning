# 语法糖
```
class Lei {
  constructor() {
    // 自身属性
  }
  // 原型属性 不可枚举
  toString() {

  }
  // 自身属性
  toString = () => {

  }
  // 自身属性
  toString = true
}

Object.assign(Lei.prototype, toString, getLast) // 一次添加多个方法
```

# constructor

> 类的默认方法， 通过new创建实例的时候，自动调用该方法

> 一个类必须有constructor方法, 如果没有显式定义，会默认一个空的

>constructor方法默认返回实例对象，但是可以指定返回另一个object

```
class Port {
  constructor() {
    return Object.create(null);
  }
}

new Port() instanceof Port // false
```

# 类的表达式
```
const My = class I {
  getName() {
    // I 仅在class 内部可用
    return I.name
  }
}

```

# 静态方法 、属性


```
static 可以继承静态属性和方法

static prop = super.propParent// parent.static.prop
static methond() {
  super.methodParent()
}

```
*** 静态属性、方法绑定在constructor下面 ***


# 私有属性

```
let selfMethodS = Symbol('selfMethod')
let propS = Symbol('prop)
class Lei {
  // 加标识_ 缺点外部仍可以访问
   _selfMethod() {
    this._prop = 'a'
   }
  // 使用symbol
  [selfMethodS]() {
    this[propS] = 'a'
  }
  // 使用作用域
  fn() {
    selfMethodFn.call(this)
  }
}

function selfMethodFn () {
  this.prop = 'a'
}
```