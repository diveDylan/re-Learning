# 定义

> 返回一个表示该对象的字符串

# Syntax

> Obj.toString()

> return [object type]

# Description


```
function toString(val) {
  return Object.prototype.toString.call(val)
}

toString(new Date);    // [object Date]
toString(new String);  // [object String]
toString(Math);        // [object Math]
toString(Array);       // [object Array]
// Since JavaScript 1.8.5
toString(undefined);   // [object Undefined]
toString(null);        // [object Null]
```


# method

```
// isArray
function isArray(val) {
  return Object.prototype.toString.call(val) === '[object Array]'
}

// isData
function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]'
}

```

