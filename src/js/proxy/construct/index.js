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
    console.log(';setting')
    // return null
    throw new Error("nullObject's prototype cannot set")
  },
  getPrototypeOf() {
    return null
  },

})

let d = new nullObject({name:'dylan',age:18})
console.log(d)
d.isPrototypeOf.name = 'nullObject'