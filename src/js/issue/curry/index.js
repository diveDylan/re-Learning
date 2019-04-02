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


// 优化 curry
function curry(func, arrArgs) {
  var args=arguments;
  var length = func.length;
  var arrArgs = arrArgs || [];
  console.log('arrArgs:', arrArgs, func.length, 'args:', args)
  return function() {
      var _arrArgs = Array.prototype.slice.call(arguments);
      var allArrArgs=arrArgs.concat(_arrArgs)
      console.log('fnarrArgs:',  allArrArgs,  _arrArgs)
      // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
      if (allArrArgs.length < length) {
          return args.callee.call(this, func, allArrArgs);
      }

      // 参数收集完毕，则执行func
       // 参数收集完毕，则执行func
       return func.apply(this, allArrArgs);
  }


}



// function curry2(fn, ...arg) {
//   let all = arg || [],
//       length = fn.length;
//   return (...rest) => {
//       let _args = all.slice(0); //拷贝新的all，避免改动公有的all属性，导致多次调用_args.length出错
//       _args.push(...rest);
//       if (_args.length < length) {
//           return curry2.call(this, fn, ..._args);
//       } else {
//           return fn.apply(this, _args);
//       }
//   }
// }

console.log(curry(add)(1)(2)(3)(4))