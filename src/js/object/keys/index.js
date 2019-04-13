/**
 * global log function
 */
if(!Object.myKeys) {
  Object.defineProperty(Object, 'myKeys', {
    value: function(obj) {
      let a = Object.keys.call(this,obj)
      console.log(a)
      return a
    }
  })
}

const obj = {
  a: '1',
  b: 2,
  c: false,
  d: null,
  [Symbol('f')]: 1 // 是匿名的[https://developer.mozilla.org/en-US/docs/Glossary/Symbol]
}

Object.myKeys(obj)

const obj2 = {
  'too': 1,
  get foo() {
    return 'foo'
  },
 
  'yoo': 1
}
obj2.name = 'd'

Object.myKeys(obj2) // ["too", "foo", "yoo", "name"]


// here we do a polyfill

if(!Object.baseKeys) {
  Object.baseKeys = function (val) {
    if(typeof val !== 'object') {
      new TypeError('val must be object')
    }
    let result = []
    if(!val) return result
    else { 
      for(let key in val) {
        result.push(key)
      }
      console.log(result)
      return result
    }
  }
}

Object.baseKeys(obj)
Object.baseKeys(obj2)
