# 用法
使用提供的对象来创建一个对象的_proto_

# 语法
```
Object.create(proto, [propertiesObject]);
/**
* @proto: 新创建对象的原型对象;
* @propertiesObject: optional 
*/
// 适用于继承
```

> Object.create(null) 创建一个原型为空的对象


# POLYFILL

```
<!-- 实现create -->
if(!Object.prototype.myCreate) {
  Object.prototype.myCreate = function(proto) {
    if( typeof proto !== 'object' &&  typeof proto !== 'function') {
      throw new TypeError(`${proto} is not a object`)
    }else {
      function F() {

      }
      // 这里官方写法很不好，proto是个对象，引用类型
     
     --- F.prototype = proto

      // 采用深拷贝
     +++ F.prototype = JSON.parse(JSON.stringfy(proto))

     // or object.assign
     +++ F.prototype = Object.assign({}, proto)

     // for in 遍历 不写了，上面两种肯定采用

    // 解构代替遍历
    +++ F.prototyp = {...proto}
      return new F()
    }
  }
}

```