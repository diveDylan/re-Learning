const logR = function(x) { console.log(x) }

const arr = [ 1, 2, 3, 4]

logR(arr.every(x => x > 1, [2,3,4]))
arr.every(function(value, index, array) {
  console.log(this)
  console.log(value, index, array)
  return value > 1
}, [2,3,4])


arr.every(function (value, index) {
  console.log(value, index)
  return value > 0
})