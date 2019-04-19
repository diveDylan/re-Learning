
const arr = [1,2,3]
Object.defineProperty(Array.prototype, 'myJoin', {
  value: function(separator=',') {
    let a = Array.prototype.join.call(this, separator)
    console.log(a)
    return a
  }
})

arr.myJoin()
arr.myJoin('-')
console.log(arr.join([1,2,3]))
console.log(arr.join({name: 'd'}))
console.log(arr.join(Object))
const arrNullOrUndefined = [null, '', undefined, true, {a:1},[1,2,3]]
arrNullOrUndefined.myJoin()


// use in array-like object
const arrObj = {
  0: true,
  1: null,
  2: [1,2,3],
  length: 3
}

function joinArrayLike(obj, separator) {
  let a = Array.prototype.join.call(obj, separator)
  console.log(a)
  return a
}

joinArrayLike(arrObj, '-')
console.log(joinArrayLike(arrObj, '-').split('-'))