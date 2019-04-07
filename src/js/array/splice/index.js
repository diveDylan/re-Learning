/**
 * 全局test 函数
 */
if(!Array.prototype.mySplice) {
  Array.prototype.mySplice = function () {
    let a = Array.prototype.splice.apply(this,arguments)
    console.log(a, this)
    return a
  }
}

const arr = [1,2,3,4,5]

arr.mySplice() // [] [1,2,3,4,5]

// start 大于length
arr.mySplice(6,0,6,7,8)//[] [1, 2, 3, 4, 5, 6, 7, 8]
// 这里就很像concat方法
function myConcat(arr) {
  // 转为数组
  let args = Array.prototype.splice.call(arguments,1)

  // es6
  console.log('arg',arguments,args )
  args = args.flat(1)
  // es5
  function flatOnce(arr) {
    let newArr = []
    for(var i = 0; i < arr.length; i ++) {
      (function(i, newArr){
        if(Array.isArray(arr[i])) {
          arr[i].forEach(i => {
            newArr.push(i)
          })
        }else {
          newArr.push(arr[i])
        }
      })(i,newArr)
    }
    return newArr
  }
  Array.prototype.splice.call(arr,arr.length, 0 ,...args)
  return arr
}
// myConcat([1,2,3], [4,5,6])[1,2,3,4,5,6]
myConcat([], [4,5,6]) 
myConcat([], 4,5,6) 


// start 为负数的情况
arr.mySplice(-1) // [8],[1,2,3,4,5,6,7] length:8 start: 7(8 - 1) deletecount: 8-7
arr.mySplice(-8) //[1,2,3,4,5,6,7],[] length: 7, start: 0, deletecount: 7

// 传入deleteCount 
// deleteCount = 0 or -1 不移除数组
// add
arr.mySplice(1,0, 1,2,3,4,5)//[] [1,2,3,4,5]
arr.mySplice(1,-1)// [] [1,2,3,4,5]
// deleteCount > 0
arr.mySplice(1,2) // [1,4,5]
arr.mySplice(1,0,2,3) // [] [1,2,3,4,5]