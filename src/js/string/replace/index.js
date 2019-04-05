

if(!String.prototype.myReplace) {
  String.prototype.myReplace = function () {
    let a = String.prototype.replace.call(this, ...arguments)
    console.log(a)
    return a
  }
}

const str = 'name,dylan;age,22;gender,male'

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

// 传参为function部分
'dylan works 4 years'.myReplace(/(\d)/g, function(match,p1,offset, string) {
  console.log('match:', match) // 4
  console.log('p1:', p1) // 4
  console.log('offset:', offset) // 12
  console.log('string:', string) // 'dylan works 4 years'
  return 'four' // dylan works four years
})

const targetUrl = 'https://github.com'
'http://localhost:8080/api/dylan921208'.myReplace(/(.+)(\/api\/)/,`${targetUrl}`)