const reg = /a/
const regG = /a/g
const str = 'a1a2a3'
let a = reg.exec(str) // ["a", index: 0, input: "a1a2a3", groups: undefined]
let a1 = reg.exec(str) // ["a", index: 0, input: "a1a2a3", groups: undefined]
let b = reg.exec('1a2a3a') // ["a", index: 1, input: "1a2a3a", groups: undefined]
let c = regG.exec('a1a2a3') // ["a", index: 0, input: "a1a2a3", groups: undefined]
let d = regG.exec('a1a2a3') // ["a", index: 2, input: "a1a2a3", groups: undefined]
let e = regG.exec('a1a2a3') // ["a", index: 4, input: "a1a2a3", groups: undefined]
console.log(c,d,e)
// 分组的情况

const regGroup = /(a)\d+(b)/g

const f = regGroup.exec('a1b1a2b2a3b3') // ["a1b", "a", "b", index: 0, input: "a1b1a2b2a3b3", groups: undefined] 
const g = regGroup.exec('a1b1a2b2a3b3') //  ["a2b", "a", "b", index: 4, input: "a1b1a2b2a3b3", groups: undefined]
console.log(f,g)


// compare with String.prototype.matchAll

let string = 'a1b1a2b2a3b3'
let strResult = string.matchAll(regGroup) // RegExpStringIterator 
let strArray = [...strResult]
console.log( strResult, strArray)