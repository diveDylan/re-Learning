const str = 'a1\nsadas\na3'
const reg = /^a/gm
const regWithG = /^a/gm
const regx = new RegExp("foo", "m")
const regNoStart = /a/gm



console.log(str.replace(reg,'m'), reg.multiline)
console.log(str.replace(regNoStart,'m'), reg.multiline)