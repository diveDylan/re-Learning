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
    // if(prop === 'age' && !Number.isInteger(target[prop])) {
    //   throw new Error('age is number')
    // }
    return target[prop]
  },
  set(target, prop, value) {
    // console.log(target, prop, value)
    if(prop === 'age' && !Number.isInteger(value)) {
      throw new Error('age is number')
    }
    target[prop] = value
    return true
  }
})

dylan.age = 'twenty'
console.log( dylan.age)
console.log( dylanProxy.age)
dylanProxy.age = 'twenty'
console.log(dylanProxy.age,)

