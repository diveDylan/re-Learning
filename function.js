Function.prototype.myApply = function(context, argArray) {
    console.log(this, this.name)
    let args = argArray || []
   if (!Array.isArray(args)) {
       throw Error('second parameters must be an Array')
   }
   let _context = (context === null || context === undefined) ? window : Object(context) 
   let functionName = Symbol(this.name)
   _context[functionName] = this
   let result = _context[functionName](...args)
   delete _context[functionName]
   return result

}
Function.prototype.myCall = function (context, ...rest) {
  
  let _context = (context === null || context === undefined) ? window : Object(context) 
   let functionName = Symbol(this.name)
   _context[functionName] = this
   let result = _context[functionName](...args)
   delete _context[functionName]
   return result

}

Function.prototype.myBind = function(context, ...rest) {

  let _context = (context === null || context === undefined) ? window : Object(context) 
  let fn = this 
  let FnBind = function(...rest1) {
      const isNew = this instanceof FnBind
      let binder = isNew ? this : _context
      return fn.call(binder, ...rest, ...rest1)

  }
  if (fn.prototype) {
      FnBind.prototype = Object.create(fn.prototype)
  }
    
   return FnBind
    
}
