#getter
取值 get 查询对象属性条用的函数（*在浏览器中点击属性会触发getter函数*）

## 语法

> {get prop() { ... }}  prop 属性名
> {get [expression]() { ... }} 计算属性名的表达式(即变量，三元，必须是个确定的值，不能使用函数)


##用法
>很多时候我们不需要显示调用属性，需要动态返回值
>使用delete 删除， setter getter都会一起删除

>使用defineProperty定义getter



#setter

设置属性时要调用的函数

## 语法
> {set prop(val) { ... }} val 要设置的值，此处作为入参
> {set [expression](val) { ... }} val 要设置的值，此处作为入参, 计算属性名的表达式(即变量，三元，必须是个确定的值，不能使用函数)

**setter和getter经常成对用来创建一个伪属性,已有值的属性一定不存在set, 如果皆存在，js先后顺序，执行后者(object.defineProperty可以重定义)**


```
 new Proxy(obj, handler) handler(obj, prop默认两个参数)会改变原obj, 不可撤销，撤销使用Proxy.revocable(target, handler);
```