/**
 * @description 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
 * @param {*} callback(accumulator, currentValue, currentIndex, array)
 * * accumulator 累计器
 * * currentValue 当前值
 * * currentIndex 当前索引
 * * array 数组
 * @param {*} initValue 
 */
Array.prototype.myReduce = function (callback, initValue) {
  if (!callback instanceof Function ) {
    throw Error('callback must be a function')
  }
  let length = this.length
  if (!length) return 
  const noInitValue = initValue === undefined 
  let start = noInitValue ? 1 : 0
  let pre = noInitValue ? this[0] : initValue
  for(let i = start; i < length; i ++) {
    pre = callback(pre, this[i], i, this)
  }
  return pre
}

// [[1,2,[3,4]], 1]
Array.prototype.myFlat = function (depth=1) {

  if (typeof depth !== 'number' || depth < 1) {
    throw Error( 'illegal depth')
  }
  function reducer (accumulator, current, deep = 0) {
    deep ++
    return Array.isArray(current) && deep < depth
    ? current.reduce((a, b) => reducer(a, b, deep), [])
    : current
  }
  return this.reduce((a, b) => a.concat(reducer(a, b, 0)), [])
}
