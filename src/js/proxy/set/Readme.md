# 定义
`handler.set()`方法是set属性值的一个陷阱

# Syntax
```
var p = new Proxy(target, {
  set: function(target, property, value, receiver) {
    // do something
  }
})

```
`set`方法返回一个`Boolean`值，返回`true`表面赋值成功，`false`在严格模式下会报错

* set无法监听数组项对象的set
* set可以监听数组项的增加，改变
* set可以监听object的属性的增加,改变

# Examples

下面这个列子解释了数组项为对象的代理

```
const arr = [ {name: 1}, {name: 2}, 3 ]

const handler = {
  set(target,property,value,receiver) {
    console.log('setting')
    return true
  }
}

const proxyArr = new Proxy(arr, handler)

proxyArr[1].name = 'dylan' // change or add object property, no log
proxyArr[2] = 'dylan' // change non-object value, log setting
proxyArr[3] = '92' // add array item, log setting

const handlerItem = {
  set(target, prop, val) {
    console.log('setting item' )
    return true
  }
}

function arrProxy(arr) {
 return  arr.map((i) => {
   <!-- 对象项转为代理 -->
    if(i.toString() === '[object Object]') {  
      i = new Proxy(i, handlerItem)
    }
    return i
  })
}
const proxyItem = arrProxy(arr)
const arrItemProxy = new Proxy(proxyItem, handler)
arrItemProxy[0].value = "zeng" // setting item

```

