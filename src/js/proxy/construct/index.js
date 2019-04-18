// 拦截constructor

const nullObject = new Proxy(Object, {
  construct(target, args, newTarget){
    console.log('target:',target)
    console.log('args:',args)
    console.log('newTarget:',newTarget)
    let a = Object.create(null)
    // 如果传入object的情况
    args.forEach(i => Object.assign(a,i))
    return a
  },
  setPrototypeOf() {
    console.log('setting')
    // cannot set the nullObject properties
    throw new Error("nullObject's prototype cannot set")
  },
  getPrototypeOf() {
    return null
  },

})
// Object.setPrototypeOf(nullObject, { name: null}) // throw a error
console.log(Object.getPrototypeOf(nullObject) === null) //true
let d = new nullObject({name:'dylan',age:18})
console.log(d)


// new 一个可以撤销的Proxy
const revocableProxy = new Proxy(Proxy, {
  construct: function(target, args, newTarget) {
    /**
     * here we create a revocable Proxy, change revocable method
     */
    let f = Proxy.revocable(args[0], args[1])
    /**
     *  revoke means set proxy to null
     *  the easy one is set f {proxy: null, revoke: null}
     * 
     * */ 
    console.log('recovable proxy:',f,args)
    f.reset = function () {
      this.proxy = null
      this.revoke = null // reset revoke function
    }
    return f
  }
})
let dylan = {
  _name: 'dylan',
  age: 27
}
let resetProxy = new revocableProxy(dylan, {
  get(target, key) {
    console.log("getting from target's proxy")
    return target[key]|| null
  },
  set(target, key, value) {
    console.log('setting to target proxy',target, key)
    if(key.startsWith('_')) {
    //拦截只读私有属性等
      throw new Error(`${key} is read-only.`)
    }
    return true
  }
})

// resetProxy.proxy才是代理对象
resetProxy.proxy.age = 26
// resetProxy.proxy._name = 'Dylan'
resetProxy.reset()
// console.log(resetProxy, dylan)


let numProxy = new Proxy(Number, {
  construct: function(target, args, newTarget) {
    // return args[0] || 1 // error return non-object
    return new Number(1)
  }
})

let num1 = new numProxy(1)
console.log(num1)