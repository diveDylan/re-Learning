/**
 * test built sort order utf -16
 * define mysort to print out the sorted Array
 */

if(!Array.prototype.mySort) {
  Array.prototype.mySort = function() {
    let a = Array.prototype.sort.apply(this, [...arguments])
    console.log(a)
    return a
  }
}

const strArr = [ 'or', 'get', 'and', 'let']
// just the order like abcdefgh....
// console.log(strArr.sort()) // and get let or
strArr.mySort()

const numArr = [ 101, 10010, 1, 23, 3]

// 按位置排序第一位开始比较
numArr.mySort()
// console.log(numArr.sort()) // 1, 10010, 101, 23, 3


/**
 *  sort order
 *  > 0
 *  = 0
 *  < 0
 */

 // > 0

 const arr = [4,1,1,15,6,2]

 arr.mySort((a, b) => {
   if(a-b > 0) {
     return -1
   }
 })


//  引用类型的排序

const objArr = [
  { id: 2, value: '2d'},
  { id: 4, value: '4d'},
  { id: 3, value: '3d'}
]

objArr.mySort((a, b) => a.id - b.id)

// mixed types

const mixedArr = ['1', 5, '1','31', 4, 11]

mixedArr.mySort((a, b) => a - b)