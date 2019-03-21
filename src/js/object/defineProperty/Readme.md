# 官方定义

Object.defineProperty()定一个对象上的一个新的属性或者修改一个已存在的属性， 并且返回这个对象

# 语法
```
Objecgt.defineProperty(obj, prop, descriptor);
/**
* @param Obj 定义属性的对象;
* @param prop 定义的属性;
* @param descriptor 描述符 定义的具体方式
* 数据描述符：configurable， enmuerable，value， writable；
* 存取描述符： configurable， enmuerable， setter， getter；
*/
```

<table>
  <tr>
    <td>configurable</td>
    <td>是否能更改描述符、是否可以删除，默认false</td>
  </tr>
  <tr>
    <td>enumerable</td>
    <td>是否可枚举，默认false</td>
  </tr>
  <tr>
    <td>value</td>
    <td>属性的具体值，默认undefined</td>
  </tr>
  <tr>
    <td>writable</td>
    <td>能否赋值 false</td>
  </tr>
  <tr>
    <td>getter</td>
    <td>取函数，默认undefined</td>
  </tr>
  <tr>
    <td>setter</td>
    <td>赋值函数，默认undefined</td>
  </td>
</table>

> 如上选项不一定是自身属性，可能是继承的，如果要保留这样可以冻结Object.prototype or Object.create(null)

> enumerable可枚举才可以被解构


