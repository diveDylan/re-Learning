/**
 * what is promise
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 */
const statusEnum = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
}
class MyPromise {
  static length = 1
  constructor(excute) {
    this.status = statusEnum.PENDING
    this.value = null
    this.fulfilledCbQueen = []
    this.rejectCbQueen = []
    const _resolve = res => {
      if(this.status !== statusEnum.PENDING) return
      this.status = statusEnum.FULFILLED
      this.value = res
      this.fulfilledCbQueen.forEach( i => {
        this.value = i(this.value)
      })
    }
    const _reject = res => {
      if(this.status !== statusEnum.PENDING) return
      this.status = statusEnum.REJECTED
      this.value = res
      this.rejectCbQueen.forEach(i => {
        this.value = i(this.value)
      })
    }
    try {
      excute(_resolve, _reject)
    } catch(e) {
      _reject(e)
    }
  }
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
  then = (onFulfilled, onRejected) => {
    return new MyPromise((resolve, reject) => {
      const _resloveFn = typeof onFulfilled === 'function' ? onFulfilled : x => x
      const _rejectFn = typeof onRejected === 'function' ? onRejected : x => x
      this.fulfilledCbQueen.push( value => {
        const val = _resloveFn(value)
        resolve(val)
      })
      this.rejectCbQueen.push(value => {
        const val = _rejectFn(value)
        reject(val)
      })
    })
  }
  /**
   * 
   * @param {*} x resolve的值，promise 或者thenable
   * TODO: thenable
   */
  static resolve(x) {
    return  x instanceof MyPromise ? x : new MyPromise(resolve => {
      resolve(x)
    })
  }

  static all(promises) {
    const result = []
    return new MyPromise((resolve, reject) => {
      const isRejected = false
      for(let index= 0; index < promises.length; i ++) {
        promise.then((res) => {
          result[index] = res
        }).catch(e => {
          reject(e)
          break;
        })
      }
    })
  }

}