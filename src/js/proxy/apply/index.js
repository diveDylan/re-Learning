const obj = {
  a: 1,
  b: 2,
  c: function(a) {
    console.log(this,a)
  }
}

const handler = {
  apply: function(target, thisArg, argumentsList) {
    console.log(target, thisArg, argumentsList)
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
}


const p = new Proxy(obj, handler)
obj.c(1)
p.c(1) // 代理后this指向proxy

// 对函数apply
const a = function (...rest) {
  return [...rest]
}

const fnProxy = new Proxy(a, handler)
console.log(fnProxy(1,2,3),a(1,2,3))