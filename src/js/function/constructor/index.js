function Person (age) {
  this.age = age
}
Person.prototype.say = function() {
  console.log('hello')
}

const diyNew = (fn, args) => {
  const obj = {}
  fn.call(obj, args)
  obj.__proto__ = Object.create(fn.prototype)
  // or Object.setPrototypeOf(Obj, Object.create(fn.prototype))
  return obj
}

console.log(diyNew(Person, 22))