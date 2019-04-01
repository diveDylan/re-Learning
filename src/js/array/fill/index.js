const arr = [1,2,4]
arr.fill(0, NaN, NaN) // [1,2,4]
arr.fill(4) // [4, 4, 4]
arr.fill(2, 0, 1)//[2, 4, 4]
arr.fill(1, -3, -1) // [1,1,1]
console.log(new Array().fill.call({ length: 3 }, 4) ) // {0: 4, 1: 4, 2: 4, length: 3}
console.log(arr)

// 使用fill object, 赋值的是同一个引用类型 会影响整个数组的赋值
arr.fill({})
console.log(arr)
arr[1].get = 'get'
console.log(arr)
