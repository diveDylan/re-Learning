function * gen () {
  var x = yield 1;
 var y = yield  x + 2;
  yield y;
  return i
}
function runSimple(gen) {
  const fn = gen()
  const res = fn.next()
  return res
}
function runV2(gen) {
  const fn = gen()
  const _next = arg => {
    const res = fn.next()
    if (res.done) {
      return res.value
    } else {
      console.log(res.value)
      _next(res.value)
    }
  }
  _next()
}

function runWithArg(gen, argList) {
  const fn = gen()
  const _next = arg => {
    const res = fn.next(arg)
    if (res.done) {
      return res.value
    } else {
      console.log(argList.shift(), res.value)
      _next(argList.shift() || res.value)
    }
  }
  _next()
}