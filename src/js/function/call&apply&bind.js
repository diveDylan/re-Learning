Function.prototype.myCall = function(callObj, args) {
  callObj = callObj || window
  callObj.function = this
  return callObj.function(...args)
}

Function.prototype.myApply = function(applyObj, args) {
  let fn = this
  if (!Array.isArray(args)) {
    throw TypeError('args must be a array')
  }
   return fn.call(applyObj, ...args)
}

Function.prototype.myBind = function(bindObj, args) {
  let bindObj = bindObj || window
  bindObj.function = this
  return () => bindObj.function(...args)
}