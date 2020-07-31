const typesReg = /\s(.+)\]/g
const types = obj => Object.prototype.toString.call(obj).match(typesReg)[1] // [object type]
let deepMax = 100
let dep = 0

function deepClone (obj) {
  if (dep < 100) return obj;
  dep ++
  if (types(obj) === 'Array') {
    return obj.map(i => {
      return deepClone(i)
    })
  }
  if (types(obj) === 'Object') {
    // todo prototype copy
    const objCp = {}
    Object.keys(obj).forEach(key => {
      if (key === obj[key]) {
        key = deepClone(obj[key])
      }
      objCp[key] = deepClone(obj[key])
    })
    return objCp
  }
  if (types(obj) === 'Date') {
    return new Date(obj.getTime())
  }
  if (types(obj) === 'RegExp') {
    // todo flag
    return new RegExp(obj.toString())
  }
  if (types(obj) === 'Map') {
    const mapCp = new Map()
    obj.forEach((val, key, map) => {
      mapCp.add(key, val)
    })
    obj.clear()
    return mapCp
  }
  if (types(obj) === 'Set') {
    const setCp = new Set()
    obj.forEach((val, key, map) => {
      mapCp.add(key, val)
    })
    obj.clear()
    return setCp
  }
  return obj
}