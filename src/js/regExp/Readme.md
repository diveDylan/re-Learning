 # 正则基础

 简单的说正则就是文本匹配工具

 # 入门
 
 >/hi/g 会匹配所有hi，不仅仅包括hi的单词;如果只查找hi这个单词，应该试用\bhi\b


```
<!-- test 函数 -->
function replace(str,reg, repS='11') {
  let a = str.replace(reg,repS)
  console.log(a)
  return a
}

```
 1. b代表单词的开头或者结尾;
 2. .匹配除了换行符外的任意字符, *代表任意数量
 3. \s匹配任意的空白符

 <table style="backgroud: #f6f4f0" >
  <h4 style="text-align:center;background:#555">常用元字符</h4>
  <tr>
    <td>代码</td>
    <td>说明</td>
  </tr>
  <tr>
    <td>.</td>
    <td>匹配除换行符以外的任意字符</td>
  </tr>
  <tr>
    <td>\w</td>
    <td>匹配字母或数字或下划线或汉字</td>
  </tr>
  <tr>
    <td>\s</td>
    <td>匹配任意空白符</td>
  </tr>
  <tr>
    <td>\d</td>
    <td>匹配数字</td>
  </tr>
  <tr>
    <td>\b</td>
    <td>匹配单词的开始或结束</td>
  </tr>
  <tr>
    <td>^</td>
    <td>匹配字符串的开始</td>
  </tr>
  <tr>
    <td>$</td>
    <td>匹配字符串的结束</td>
  </tr>
  <h4 style="text-align:center;background:#555"></h4>
 </table>

 ```
// \b匹配单词开头或者结尾
// 匹配开头
replace('hi sehi hilly hii hi', /\bhi/g) // 11 sehi 11lly 11i 11
// 匹配结尾
replace('hi sehi hilly hii hi', /hi\b/g) // 11 se11 hilly hii 11
// 匹配单词
replace('hi sehi hilly hii hi', /\bhi\b/g)//11 sehi hilly hii 11
// .匹配换行符外的任意字符
replace('hi\n sss', /./g,1) 

// 匹配换行符 \n
replace('\n\n', /\n/g, 1)

// 匹配字母数字或者下划线或者汉字
replace('a1_曾Z', /\w/g, 'who?') // who?who?who?曾who?
// 匹配不到汉字
replace('曾', /\w/g, 'who?') // 曾
// 正确的匹配汉字
replace('曾', /[\u4e00-\u9fa5]/g, 'who?') // who？

// 

 ```


 <table style="backgroud: #e3e3e4" >
  <h4 style="text-align:center ">常用分组语法</h4>
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
  <tr>
    <td>(?:exp)</td>
    <td>匹配exp，不捕获匹配的文本，也不给此分组分配组号</td>
  </tr>
  <tr>
    <td>(?=exp)</td>
    <td>匹配exp前面的位置</td>
  </tr>
  <tr>
    <td>(?<=exp)</td>
    <td>匹配exp后面的位置</td>
  </tr>
  <tr>
    <td>(?!exp)</td>
    <td>匹配后面跟的不是exp的位置</td>
  </tr>
  <tr>
    <td>(?<！exp)</td>
    <td>匹配前面跟的不是exp的位置</td>
  </tr>
  <tr>
    <td>(?#comment)</td>
    <td>这种类型的分组不对正则表达式的处理产生任何影响，用于提供注释让人阅读
</td>
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