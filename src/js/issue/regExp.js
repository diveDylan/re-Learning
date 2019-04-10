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

// 过滤敏感字，并显式同等长度的*
