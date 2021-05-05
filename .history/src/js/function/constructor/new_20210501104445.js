function myNew(fn) {
  if (typeof fn !== 'function') {
    throw Error('illegal parameters fn')
  }
}