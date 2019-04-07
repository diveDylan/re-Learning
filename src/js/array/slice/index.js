// 测试函数
if(!Array.prototype.mySlice) {
  Array.prototype.mySlice = function () {
    let a = Array.prototype.slice.apply(this, arguments)
    console.log(a)
    return a
  }
}

// examples

// copy array 
const arr = [ 1, '2', [3,4]]
arr.mySlice() // [ 1, '2', [3,4]]

// slice 不传begin默认copy，不传end默认为length
arr.mySlice(1) //["2", [3,4]]

// end < begin
arr.mySlice(1,0) // []

// 负数
arr.mySlice(-2, -1) // ['2']