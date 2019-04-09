var json = {
  "a":1,
  "b":2,
  "c":"",
  "d":[{"aa":[{"aaa":null,"bbb":222}]}],
  "e":22,
  "f":null
 }
//  去除空项null, ""

 let str = JSON.stringify(json)
 // key的命名支持数字字母下划线汉字
 let result = str.replace(/\"\"/g, null).replace(/\"([\u4E00-\u9FA5A-Za-z0-9_]+)\"\:null\,?/g, '')
 console.log(result)


 function isObject(ob) {
    return typeof ob === 'object'
  }
  function getNonObject(ob) {
    if(!isObject(ob) || !ob) return ;
    else {
      for(let i in ob) {
        if(!ob[i]) delete ob[i]
        if(isObject(ob[i])) {
          ob[i] = getNonObject(ob[i])
        }
      }

    }
    
    return ob;
  }
 