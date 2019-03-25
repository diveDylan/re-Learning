# 定义
> Symbol.iterator 众所周知这是用来指定对象的默认迭代器。用于for ... of

# 描述
> 任何时候如果一个对象是可迭代的（比如可以使用for..of循环, 还有解构符）,它的迭代器方法会在不传参的情况下运行，并且返回的迭代器是用来输出迭代的值

> js有些内置类型具有默认迭代器.(对象默认是没用)

```
1. Array.prototype[@@iterator]();
2. TypedArray.prototype[@@iterator]();
3. String.prototype[@@iterator]();
4. Map.prototype[@@iterator]();
5. Set.prototype[@@iterator]();

```