const STATUS_ENUM = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

const isFn = fn => Object.prototype.toString.call(fn) === '[object Function]'

class MyPromise {
  constructor(excutor) {
    this.status = STATUS_ENUM.PENDING
    this.val = null
    this.fulfilledQueue = []
    this.rejectedQueue = []
    const _resolve = val =>  {
      if (this.status !== STATUS_ENUM.PENDING) return
      this.val = val
      this.status = STATUS_ENUM.FULFILLED
      this.fulfilledQueue.forEach(fn => {
        this.val = fn(this.val)
      })
    }
    const _reject = val => {
      if (this.status !== STATUS_ENUM.PENDING) return
      this.status = STATUS_ENUM.REJECTED
      this.val = val
      this.rejectedQueue.forEach(fn => {
        this.val = fn(val)
      })
    }
    try {
      excutor(_resolve, _reject)
    }catch(e) {
      _reject(e)
    }
  }
  then(fulfilledFn, rejectFn) {
    return new MyPromise((resolve, reject) => {
      const resolveFn = isFn(fulfilledFn) ? fulfilledFn : fulfilledFn => fulfilledFn
      const rejectFn = isFn(rejectFn) ? rejectFn : rejectFn => rejectFn
      this.fulfilledQueue.push(val => {
        let value = resolveFn(val)
        resolve(value)
      })
      this.rejectedQueue.push(val => {
        let value = rejectFn(val)
        reject(value)
      })
    })
  }

  all(promiseList) {

  }
  race(promiseList) {

  }
  resolve(x) {
    return x instanceof MyPromise ? x : new MyPromise((resolve) => resolve(x))
  }

}
