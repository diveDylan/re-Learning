# 用法
> 用于将所有_**可枚举**_属性的值从一个或多个源对象复制到目标对象（可替换）。会更改目标对象，返回目标对象

# 语法
```
  Object.assign(target, ...sources);// sources源对象不受影响

  // 不改变目标对象写法 or clone
  Object.assign({...target}, ...sources);
  Object.assign({}, target, ...sources);

```


# 注意
- 一般未浅克隆，即如果克隆的属性为引用类型（对象，object），克隆的是地址，引用类型的改变将映射到克隆对象
```
//  若clone属性为对象或者引用类型，改变将映射到clone object

const target = {
  a: 1,
  b: 2
};

const source = {
  c: {
    deep: false
  },
  d: [1,2,3]
};

let cloneObject = Object.assign(target, source);
// 引用类型改变
source.c.deep = true;
source.d[0] = 4;
console.log(cloneObject);// { a: 1, b: 2, c: { deep: true }, d: [ 4, 2, 3 ] }


```
- deep clone
```
--- let cloneObject = Object.assign(target, source);
+++ let deepObject = Object.assign(target, JSON.parse(JSON.stringfy(source)));
// 引用类型改变代码

console.log(deepObject) // { a: 1, b: 2, c: { deep: false }, d: [1,2,3] }

```

- 遗留问题 [https://segmentfault.com/q/1010000018572427]