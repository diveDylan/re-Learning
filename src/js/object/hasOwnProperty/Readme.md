
* 看vue 源码里有这个属性从字面虽知道大概，但是总感觉不清楚


# 定义

该方法用于检测对象自身中( **不包含继承属性** )是否具有一个指定属性，返回一个布尔值

# 语法
```
obj.hasOwnProperty(prop) 
/**
* @params prop: 要检测的属性，String or Symbol；
* @retrun Boolean
*/
```

# 用法

```
// 避免所有情况：对象上含有hasOwnProperty属性
// 完整的检测自身属性
Object.hasOwnProperty.call(obj, key);

```