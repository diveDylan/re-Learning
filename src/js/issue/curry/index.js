function add(x,y) {
  return x + y
}

function curry1(x) {
  // x 可能是一个函数
  
  return function (y) {
    console.log(x, y)
    add(x, y)
  }
}

// curry1(2)(3) // 2, 3
// is not function 
// curry1(1)(2)(3)


// // 优化 curry
// const curry = ( fn, arr = []) => {
  
//   return (...args) => { 
//       if(args.length === 0) {
//         return fn(...arr)
//       }
//       //判断参数总数是否和fn参数个数相等
//       arr.concat(args.slice())
//       console.log('arr',arr, 'args',args)
      
//       return curry(fn,[...arr, ...args]) //迭代，传入现有的所有参数
      

//   }
// }
// const test = curry(function() {
//   let sum = [...arguments].reduce(add)
//   console.log(sum)
// })

// console.log(test(1,2)(3)(4)(5)()) 
//根据fn个数curry
//  function curryLength(fn, arr=[]) {
//   return function (...args) {
//     let _arr = arr.concat(args)
//     console.log('arr:', arr, args, _arr)
//     if(_arr.length == fn.length) {
//       return fn(..._arr)
//     }else {
//       return curryLength(fn, _arr)
//     }
//   }
// }
const curryLength = (fn, arr=[]) => (...args) => arr.concat(args).length === fn.length ? fn(...arr.concat(args)) : curryLength(fn, arr.concat(args)) 
function addLength (a,b,c,d)  {
  console.log('test', a,b,c,d)
  console.log( a + b + c + d)
  return a + b + c + d
}
// const testLength = curryLength(addLength)
// testLength(1)(2)(3)(4)

const curry = (fn, arr=[]) =>
  (...args) => 
    args.length === 0 ? fn(arr.concat(args)) :
    curry(fn, arr.concat(args))


console.log(curry((arguments) => arguments.reduce(add))(1)(2)(3)(4)(5)())