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
Object.setPrototypeOf(nullObject, { name: null}) // throw a error
console.log(Object.getPrototypeOf(nullObject) === null) //true
let d = new nullObject({name:'dylan',age:18})
console.log(d)
