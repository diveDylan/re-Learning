// use strict
const arr = [ {name: 1}, {name: 2}, 3 ]

const handler = {
  set(target,property,value,receiver) {
    console.log('seting')
    return true
  }
} 

const proxyArr = new Proxy(arr, handler)

proxyArr[2] = 'dylan' // log setting
proxyArr[3] = '92'

const handlerItem = {
  set(target, prop, val) {
    console.log('setting item' )
    return true
  }
}

console.log(arr, proxyArr)
function arrProxy(arr) {
 return  arr.map((i) => {
    if(i.toString() === '[object Object]') {
      i = new Proxy(i, handlerItem)
    }
    return i
  })
}
const proxyItem = arrProxy(arr)
const arrItemProxy = new Proxy(proxyItem, handler)
console.log(arrItemProxy, proxyItem)
arrItemProxy[0].value = "zeng"

const handlerFalse = {
  set(target, prop, val) {
    return false
  }
}


const proxy = new Proxy(arr, handlerFalse)
proxy[5] =1


const obj = {
  a: 1,
  b: 2
}

const objProxy = new Proxy(obj, handler)

objProxy.c = 3
objProxy.c = 2