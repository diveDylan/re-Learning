const str = 'a1\nsadas\na3'
const reg = /^a/gm
const regWithG = /^a/gm
const regx = new RegExp("foo", "m")
const regNoStart = /a/gm
const regS = /3/m

console.log(str.replace(reg,'m'), reg.multiline)
console.log(str.replace(regNoStart,'m'),)
console.log(str.replace(regS,'m'),)