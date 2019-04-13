# 定义

Object.keys() 返回一个对象的所有可枚举的key值数组，与循环顺序一致


# Syntax

> Object.keys(obj)


# Example

```

const obj = {
  a: '1',
  b: 2,
  c: false,
  d: null,
  [Symbol('f')]: 1 // symbol不可枚举匿名
}

Object.keys(obj) //  ["a", "b", "c", "d"]


const obj2 = {
  'too': 1,
  get foo() {
    return 'foo'
  },
 
  'yoo': 1
}
obj2.name = 'd'

Object.myKeys(obj2) // ["too", "foo", "yoo", "name"]

```