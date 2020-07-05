const types = {
  OBJECT: '[object Object]',
  ARRAY: '[object Array]',
  DATE: '[object Date]',
  REGEXP: '[object RegExp]'
}

const isOriginObject = obj => obj.__proto__.constructor === Object

const toStr = obj => Object.prototype.toString.call(obj)

const isType = (obj, typeName) => toStr(obj) === types[typeName]

function deepClone(obj) {
  if (isType(obj, 'OBJECT')) {
    let objCopy
    if (!isOriginObject(obj)) {
      objCopy = Object.create(null)
      objCopy.__proto__ = Object.create(obj.__proto__.constructor.prototype)
    } else {
      objCopy = {}
    }
    Object
      .keys(obj)
      .forEach(key => {
        objCopy[key] = deepClone(obj[key])
      })
    return objCopy
  }
  if (isType(obj, 'ARRAY')) {
    return obj.map(key => deepClone(key))
  }
  if (isType(obj, 'Date')) {
    return new Date(date.getTime())
  }
  if (isType(obj, 'REGEXP')) {
    return new RegExp(obj)
  }
  return obj
}