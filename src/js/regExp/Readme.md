 # 正则基础

 简单的说正则就是文本匹配工具

 # 入门
 
 >/hi/g 会匹配所有hi，不仅仅包括hi的单词;如果只查找hi这个单词，应该试用\bhi\b

 1. b代表单词的开头或者结尾;
 2. .匹配除了换行符外的任意字符, *代表任意数量
 3. \s匹配任意的空白符
 <table>
  <tr>
    <td>语法</td>
    <td>作用</td>
  </tr>
  <tr>
    <td>(exp)</td>
    <td>匹配exp，并捕获文本到自动命名的组里</td>
  </tr>
  <tr>
    <td>(?<name>exp) or (?'name'exp)</td>
    <td>匹配exp，并捕获文本到命名为name的组里</td>
  </tr>

 </table>
 

***格式化数字***

```
function formatNum(num) {
  return num.replace(/\B(?=(\d{3}+(?!\d)))/g, ',');
}

let test = 123456789;
formatNum(test); // 123,456,789;
```

# 学习资料
1、[正则入门](http://www.runoob.com/w3cnote/regular-expression-30-minutes-tutorial.html#alternative);
2、