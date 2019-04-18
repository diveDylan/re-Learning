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

// const proxy = new Proxy(new Number(1), handler)
// const proxy = new Proxy('1', handler)
// const proxy = new Proxy(true, handler)
// const proxy = new Proxy(new String('1'), handler)

fnProxy(1,2,3) // 6

/**
 * 
 * 拦截 proxy
 */
const proxyApply = new Proxy(Proxy, {
  apply: function(target, thisArg, args) {
    console.log('apply proxy:',target, thisArg, args)
    // 可定义handler
    args[1].get = function(obj, key) {
      console.log('from proxyApply', obj[key])
      return obj[key]
    }  
    return new target(...args)
  }
})


proxyApply(obj, {}).a // from proxyApply 1

/**
 * Function.prototype.call() 和Function.prototype.apply()
 * thisArg
 */
const handlerCall = {
  apply: function(target, thisArg, argumentsList) {
    console.log('arg:',argumentsList, 'this:', thisArg)
     
    if(thisArg ) {
      return thisArg.name ||  {name: 'new'}
    }
    
    return Reflect.apply(...arguments) // 即target(...argumentsList) 函数调用
  }
}
function logName(a) {
  console.log(a,a.name)
  return a.name
}
const proxyName = new Proxy(logName, handlerCall)

proxyName(window) // 'window'
proxyName.call(window) // {name: 'new' }
proxyName.apply(window)// {name: 'new' }

// 这里的proxy拦截应该是指proxy代理的函数
Reflect.apply(proxyName, null, [window])