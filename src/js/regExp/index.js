// 数字格式化

const strReplace = String.prototype.replace
function formatNumber(val) {
  if(Number(val) == 'NaN') return
  return strReplace.call(val, /\B(?=(\d{3})+(?!\d)))/g, ',')
}

function replace(str,reg, repS='11') {
  let a = str.replace(reg,repS)
  console.log(a)
  return a
}

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
replace('a1_曾Z', /\w/g, 'who?')
// 匹配不到汉字
replace('曾', /\w/g, 'who?')
// 正确的匹配汉字
replace('曾', /[\u4e00-\u9fa5]/g, 'who?')

// 匹配数字
replace('dylan0learn0js', /\d/g, ' ')// dylan learn js

// 匹配字符串开始
replace('dylan learn js', /^le/g)// dylan learn js
replace('dylan learn js', /^d/g)// 11ylan learn js
// 匹配字符串结尾
replace('dylan learn js', /n$/g)// dylan learn js
replace('dylan learn js', /js$/g)// dylan learn 11

replace('dylan learning js', /n\b/g) // dyla11 learning js


// 匹配数字次数
replace('949440946@qq.com', /\d*/, 'qq***')
replace('@qq.com', /\d*/, 'qq***')


// 捕获位置

replace('name is 2dylan', /(\d)(?=dylan)/, '$1Zeng')

// 如何捕获多次

replace('name is 2dylan, 2dylan like U',/(\d)(?=dylan)/g, '2Zeng')
replace('3dylandylandylan',/(?=dylan)+/, 'Zeng,')

// we test formatNum

replace('949440946', /(\d{3})/g, '$1,') // 949, 440, 946

// 多一位 不行，我们改造下
replace('1111949440946', /\B(?=(\d{3})+$)/g, ',') // 949, 440, 946

