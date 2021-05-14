// require('./webpack.tj')
console.log('ssss')
require('./webpack.tp')

function selectionSort(arr) {
  console.log('www')
  let len = arr.length
  let j = 0
  while(j < len) {
    let min = arr[j]
    let pre = j
    for(let i = j + 1; i < len; i ++) {
      if (min > arr[i]) {
        pre = i
        min = arr[i]
      }
    }
    // change places
    [arr[j], arr[pre]] = [min, arr[j]]
    j ++
    
  }
  return arr
}

