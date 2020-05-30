Function.prototype.customApply = function(context) {
    context = context || window
    const key = Symbol()
    context[key] = this
    args = [].slice.call(arguments, 1)
    const res = context[key](...args)
    delete context[key]
    return res
}

Function.prototype.customCall = function(context) {
  context = context || window
  const key = Symbol()
  context[key] = this
  args = Array.from(arguments).slice(1)
  const res = context[key](...args)
    delete context[key]
    return res
}

Function.prototype.customBind = function (context) {
  const fn = this
  const arg = args = [].slice.call(arguments, 1)
  return function newFn(args) {
    if (this instanceof newFn) {
      return new fn.apply(context,[...args, ...arg])
    }else {
      return fn.apply(context,[...args, ...arg])
    }
  }
}