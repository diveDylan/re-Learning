# 用法


`更多了解请参考 [MDN Symbol.asyncIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)`



> [MDN] The Symbol.asyncIterator well-known symbol specifies the default AsyncIterator for an object. If this property is set on an object, it is an async iterable and can be used in a for await...of loop.

> Symbol.asyncIterator是symbol指定对象默认的asyncIterator。（如果这个属性在对象设置了，他是异步可迭代的并且可用于for await ... of 循环中


# 描述

> The Symbol.asyncIterator symbol is a builtin symbol that is used to access an object's @@asyncIterator method. In order for an object to be async iterable, it must have a Symbol.asyncIterator key.

> Symbol.asyncIterator symbol 是用于接手对象的 异步迭代器的方法的内置symbol。对象只有具有Symbol.asyncIterator键【属性】时，才是异步可迭代的。

