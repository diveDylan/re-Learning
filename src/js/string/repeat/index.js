// 使用转义越过 '闭合标签的问题
const str = 'I\'m dylan '

str.repeat() // 空
// str.repeat(-1) // RangeError
str.repeat(0) // 空
str.repeat(1) // I'm dylan 
str.repeat(1.8) // 1、Math.floor(1.8) 2、output: I'm dylan 
str.repeat(2) // I'm dylan I'm dylan 

