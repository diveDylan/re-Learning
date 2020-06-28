/**
 * what is promise
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 */

class MyPromise {
  static length = 1
  constructor(excute) {
    const statusEnum = {
      PENDING: 'PENDING',
      FULFILLED: 'FULFILLED',
      REJECTED: 'REJECTED'
    }
    this.status = statusEnum.PENDING
    this.value = null
    this.fufilledQueue = []
    this.rejectQueue = []
    const _resolve = res => {
      if(this.status !== statusEnum.PENDING) return
      this.status = statusEnum.FULFILLED
      this.value = res
      this.fufilledQueue.forEach( i => {
        this.value = i(this.value)
      })
      
    }
    const _reject = res => {
      if(this.status !== statusEnum.PENDING) return
      this.status = statusEnum.REJECTED
      this.value = res
      this.rejectQueue.forEach(i => {
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
      const _resolve = typeof onFulfilled === 'function' ? onFulfilled : x => x
      const _reject = typeof onRejected === 'function' ? onRejected : x => x
      this.fufilledQueue.push(i => {
       const val = _resolve(i)
       resolve(val)
      })
      this.rejectQueue.push(i => {
        const val = _reject(i)
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