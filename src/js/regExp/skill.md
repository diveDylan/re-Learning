# 正则的妙用

### 常见的数字格式化
```
const strReplace = String.prototype.replace
function formatNumber(val) {
  if(Number(val) == 'NaN') return
  return strReplace.call(val, /\B(?=(\d{3})+(?!\d)))/g, ',')
}

```

## 去除json 空项(null, "")
```
const json = {
  a: 1,
  b: 2,
  c: '',
  d: [{ aa: [{ aaa: null, bbb: 222 }] }],
  e: 22,
  f: null
}

// 正则的处理方式
//  去除空项null, ""
// key的命名支持数字字母下划线汉字
let result = JSON.stringify(json)
  .replace(/\"\"/g, null)
  .replace(/\"([\u4E00-\u9FA5A-Za-z0-9_]+)\"\:null\,?/g, '')
let newJson = JSON.parse(result)

// 非正则处理方式
function isObject(ob) {
  return typeof ob === 'object'
}
function getNonObject(ob) {
  if (!isObject(ob) || !ob) return
  else {
    for (let i in ob) {
      if (!ob[i]) delete ob[i]
      if (isObject(ob[i])) {
        ob[i] = getNonObject(ob[i])
      }
    }
  }

  return ob
}


```
## 过滤敏感字，并显示同等长度*
[String.prototype.replace详解](../string/replace/Readme.md)

```
const content = '132sbsadasdadsacaosdakaofucksdsdasdasdasbsdsadasddkaonimasdsadadsadadasdsmabi'
const notAllowedWords = ['sb', 'cao', 'kao','mabi', 'nima']
 
content.replace( new RegExp(notAllowedWords.join('|'), 'g'), function(match) {
  // 这里有个复杂度的问题，暂时不知道这两个写法哪个方便些
    <!-- return new Array(match.length).fill('*').join('') -->
    return String.prototype.repeat.call('*')
})
<!-- 非正则写法 -->
notAllowedWords.map((item)=>{
 var reg = new RegExp( item, 'g');
 content = content.replace(reg, '*'.padStart(item.length, '*'));
})

```

