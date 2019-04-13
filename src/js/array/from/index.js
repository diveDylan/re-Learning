if(!Array.myFrom) {
  Array.myFrom = function() {
    let a = Array.from.call(this, ...arguments)
    console.log(a)
    return a
  }
}

Array.myFrom({1: 'a', 2: '3', length: 2})
Array.myFrom({1: 'a', 2: '3', length: 2}, (item) => {
  console.log(item)
  return item
})

Array.myFrom([1, 2, 3], (item) => {
  console.log(item)
  return item * 2
})

// 创建一个从1开始到n的数组

Array.myFrom({length: 10}, (v,i) => i + 1)

Array.myFrom('foo')