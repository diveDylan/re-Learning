const str = 'a1\nsadas\na3'
const reg = /^a/m
const regWithG = /^a/gm
const regx = new RegExp("foo", "m")



console.log(str.replace(reg,'m'), reg.multiline)