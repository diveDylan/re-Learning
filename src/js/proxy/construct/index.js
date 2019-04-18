// 拦截constructor

const nullObject = new Proxy(Object, {
  construct(target, args, newTarget){
    const proto = Object.create(null)
    let f = new target()
    f.prototype = proto
    console.log('target:',target)
    console.log('args:',args)
    console.log('newTarget:',newTarget)
    return f
  },
  setPrototypeOf() {
    // cannot set properties
    throw new Error("nullObject's prototype cannot set")
  },
  getPrototypeOf() {
    return null
  },

})

let d = new nullObject()