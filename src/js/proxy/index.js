const obj = {
  a: '1',
  b: '2',
  c: '3'
}

let proxy = new Proxy(obj,{
  get: function(target, props){
    console.log(obj, target, Object.is(obj, target))
    return target[props]
  },
  set: function(target, props, value) {
  }
})
obj.a = 'a'
proxy.b = 'b'
// 引用类型相互影响
// proxy.isRevoked =
console.log(typeof proxy ) // 'object'
console.log(proxy.a, obj.a, proxy, ); // a, a
console.log(proxy.b, obj.b); // b, b

// validate

let dylan = {
  age: 22,
  name: 'dylan'
}

let dylanProxy = new Proxy(dylan, {
  get(target, prop) {
    return target[prop]
  },
  // 拦截代理对象的set
  set(target, prop, value) {
    console.log('proxy setting')
    if(prop === 'age' && !Number.isInteger(value)) {
      throw new Error('age is number')
    }
    target[prop] = value
    return true
  }
})
let dylanRef = new Proxy(dylan, {
  get(target,prop) {
    return Reflect.get(target, prop)
  },
  set(target, prop, value) {
    return Reflect.set(target, prop, value)
  }
})
/**handler的trap并不作用于原对象 */
dylan.age = 'twenty'
dylanProxy.age = 20
dylanRef.age = 21
console.log( dylan.age) //  'twenty'
console.log( dylanProxy.age,dylanProxy.name) // 'twenty'
console.log(dylanRef.age, dylanRef.name)
// dylanProxy.age = '2a'
// console.log(dylanProxy.age,)

/**
 * 实现一个不影响的proxy
 */






