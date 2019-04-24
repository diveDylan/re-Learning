# 定义
filter() 会返回一个根据指定函数过滤原数组每一项后生成的新数组

# Syntax
> arr.filter(callback[, thisArg])

* callback function(value, index, array) // value--> 当前数组项 index-->数组下标 array-->调用callback的数组本身

* this对象, callback执行指定的this 不能更改callback的执行数组 **callback不能使用箭头函数的情况(this--> window)**

* 返回一个由callback函数过滤的数组，true则保留false则去除，如果全部不通过则返回一个空数组


# Examples

```

const groupList = [
  { name: 'dylan', like: 'sea' },
  { name: 'nike', like: 'sport' },
  { name: 'caler', like: 'cook' },
  { name: 'rose', like: 'sea' },
]

groupList.filter(x => x.like === 'sea')

// only need the nameList
groupList.filter(x => x.like === 'sea').map(x => x.name)

// create a search method
const searchLike = (arr, like) => arr.filter(x => x.like === like)
// it can be a db search

searchLike(groupList, 'cook')

// improve search 忽略大小写 或者转成小写
const searchByLike = (arr, like) => arr.filter(x => new RegExp(like, 'ig').test(x.like))
<!-- or -->
const searchByLike = (arr, like) => arr.filter(x => x.like === like.toLowerCase)
searchByLike(groupList, 'SEa')

```