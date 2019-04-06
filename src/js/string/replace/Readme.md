# 用法

> replace方法将捕获的字符串替换并返回新的字符串,不改变原字符串

# Syntax 

```
str.replace(regexp | substr, newSubstr | function)

** @params regexp 正则对象，被替换的匹配对象
** @params substr 字符串，使用该参数会只体会第一个

** newSubstr 代替的字符串
** function 


```


```
<!-- 全局测试函数 -->


if(!String.prototype.myReplace) {
  String.prototype.myReplace = function () {
    let a = String.prototype.replace.call(this, ...arguments)
    console.log(a)
    return a
  }
}

```
* **传参为字符串: newSbustr**

<table>
  <h4  style="text-align: center">
    replace str(params newSubstr替换为字符串的情况)
  </h4>
  <thead>
    <tr>
      <td>写法</td>
      <td>插入值</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$$</td>
      <td>将匹配字符替换成$</td>
    </tr>
    <tr>
      <td>$&</td>
      <td>将匹配字符替换成匹配的值</td>
    </tr>
    <tr>
      <td>$`</td>
      <td>插入匹配前的字符</td>
    </tr>
    <tr>
      <td>$'</td>
      <td>插入匹配后面的字符串</td>
    </tr>
    <tr>
      <td>$n</td>
      <td>插入匹配的第n个字符，也称分组（从1开始）</td>
    </tr>
  </tbody>
</table>

```
<!-- exmaples -->
// 测试$$
str.myReplace(/a/,'$$') // 插入$
// $&
str.myReplace(/a/,'$&1') // 替换成匹配的值: a -> a($&)
// $`插入匹配前的字符
// $`代表(name,),d替换成(name,)
str.myReplace(/d/, '$`') // name,name,ylan;age,22;gender,male
// $' 插入匹配后的字符
'name dylan'.myReplace(/\s/, "$'") //namedylandylan
// 测试分组 $n
str.myReplace(/(\w+)\,(\w+)/, "$1:$2")// name:dylan;age,22;gender,male
// g，全部每组按照规则替换
str.myReplace(/(\w+)\,(\w+)/g, "$1:$2")//name:dylan;age:22;gender:male

```

* **传参为函数: function**
传参会在正则或者字符匹配的情况下调用，如果是全局匹配，函数每次匹配都会调用,
会根据function的返回值替换，***函数默认返回值为undefined***

<table>
  <h4 stlye="text-algin:center">
  <tr>
    <td>match</td>
    <td>匹配的字符串同上表的$&</td>
  </tr>
  <tr>
    <td>p1,p2...</td>
    <td>匹配的第几个$n</td>
  </tr>
  <tr>
    <td>offset</td>
    <td>匹配的位置</td>
  </tr>
  <tr>
    <td>string</td>
    <td>检查的字符串</td>
  </tr>

</table>


```
<!-- exmaples -->
// 传参为function部分
'dylan works 4 years'.myReplace(/(\d)/g, function(match,p1,offset, string) {
  console.log('match:', match) // 4
  console.log('p1:', p1) // 4
  console.log('offset:', offset) // 12
  console.log('string:', string) // 'dylan works 4 years'
  return 'four' // dylan works four years
})


// 常用部分 /api代理重写转发
const targetUrl = 'https://github.com'
'http://localhost:8080/api/dylan921208'.myReplace(/(.+)(\/api\/)/,`${targetUrl}`)
<!-- 改进下 -->
'http://localhost:8080/api/dylan921208'.myReplace(/^.+api/,`${targetUrl}`)

```