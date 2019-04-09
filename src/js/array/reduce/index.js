const arr = [1,2,3,4,5]

// 不提供initValue 从下标1开始回调，函数执行 length -1次
arr.reduce((a,b,c,d) => {
  console.log(a,'current:',b,c,d)
  return a + b
})

// 提供initValue, 从下标0开始，函数执行length次
arr.reduce((a,b,c,d) => {
  console.log(a,'current:',b,c,d)
  return a + b
}, 1)


// 拼接数组
let brr = [[1,2], [3,4], [5,6],7]
let crr = [[1,2,[1.5,2.5,[3.5,4.5]]], [3,4,['3','4']], [5,6],7]

console.log(brr.reduce((a,b) => a.concat(b) ))

// here also flat polyfill
if(!Array.prototype.myFlat) {
  function reduceByDepth(arr, depth, step=0) {
    console.log(depth, step)
    return  arr.reduce((a,b) => {
      console.log(a,b)
      return Array.isArray(b) && step < depth ? a.concat(reduceByDepth(b, depth, step + 1)) : a.concat(b)
    },[])
 
  }
  Object.defineProperty(Array.prototype, 'myFlat', {
    value: function(depth = 1) {// set default depth
      const arr = []
      let o = Object(this)
      // 转为正数数字
      let len = this.length >>> 0
      if(len < 1) return arr
      else {
        console.log(reduceByDepth(o,depth))
        return reduceByDepth(o,depth)
      }

    }
  })
}

brr.myFlat()
crr.myFlat()