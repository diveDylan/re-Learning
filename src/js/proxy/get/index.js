const Dylan = {
  name: 'dylan',
  age: '27',
  [Symbol('like')]: 'dive'
}

Object.defineProperty(Dylan, 'gender', {
  configurable: false,
  enumerable: false,
  writable: false,
  value: 'Male'
})

let proxyDy = new Proxy(Dylan, {
  get: function(target, prop, recevier) {
    console.log(this, 'getting')
    console.log(target, prop, recevier)
    if(prop === 'gender') return 'female'
    return Reflect.get(target, prop, recevier)
  },
  set: function(target, prop, val) {
    console.log('setting:', target, prop, val)
    return Reflect.set(target, prop, val)
  }
})

proxyDy.gender
console.log(proxyDy.gender)
console.log(proxyDy.name, Dylan.gender, proxyDy[Symbol('like')])
