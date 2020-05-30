const b = require('./b')
let a = 1
setTimeout(() => {
  a = 2
  console.log(a)
}, 1000)
module.exports = a