function myNew(fn, ...rest) {
  if (typeof fn !== 'function') {
    throw Error('params must be a function or constructor')
  }
  let obj = Object.create(null)
  obj.prototype = Object.create(fn.prototype)
  obj = fn.call(obj, ...rest)
  return obj
}