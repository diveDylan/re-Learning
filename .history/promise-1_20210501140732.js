const STATUS_ENUM = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECT: 'rejected'
}

class MyPromise {
  /**
   * 
   * @param {function} excotor function 
   */
  constructor(excotor) {
    this.val = null
    this.err = null
    this.status = null
    this.fulfilQueue = []
    this.rejectQueue = []
    const resolve = (val) => {
      if (this.status !== STATUS_ENUM.FULFILLED) {
        this.status = STATUS_ENUM.FULFILLED
      }
      this.val = val
      this.fulfilQueue.forEach(fn => {
        console.log(val, fn)
        this.val = fn(val)
      })
    }
    const reject = (err) => {
      if (this.status !== STATUS_ENUM.REJECTED) {
        this.status = STATUS_ENUM.REJECTED
      }
      this.err = err
      this.rejectQueue.forEach(fn => {
        this.val = fn(this.val)
      })
    }
    try {
      excotor(resolve, reject)
    }catch(err) {
      reject(err)
    }
  }

  static resolve() {

  }
  static reject() {

  }
  static all() {}
  static race() {}

  then(fulfilledFn, rejectedFn) {
    let fulfilledHander = typeof fulfilledFn === 'function' ? fulfilledFn : fulfilledFn => fulfilledFn
    let rejectedHandler = typeof rejectedFn === 'function' ? rejectedFn : rejectedFn => rejectedFn
    return new MyPromise((resolve, reject) => {
      const fulfilledCallback = (val) => {
        try {
          let res = fulfilledHander(val)
          if (res instanceof MyPromise) {
            res.then(res => resolve(res))
          } else {
            resolve(res)
          }
        } catch(err) {
          reject(err)
        }
        
      }
      const rejectedCallback = (err) => {
        try {
          if (rejectedCallback instanceof MyPromise) {
            rejectedCallback(err).then(res => resolve(res), err => reject(err))
          } else {
            let err = rejectedCallback(err)
            resolve(err)
          }
        } catch(err) {
          reject(err)
        }
      }

      switch(this.status) {
        case STATUS_ENUM.PENDING: 
          this.fulfilQueue.push(fulfilledCallback)
          this.rejectQueue.push(rejectedCallback)
          break
        case STATUS_ENUM.FULFILLED:
          this.fulfilledCallback(this.val)
          break
        case STATUS_ENUM.REJECTED:
          this.rejectQueue(this.err)
          break
      }
    })
  }
}