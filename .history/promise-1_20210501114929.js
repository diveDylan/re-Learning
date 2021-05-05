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
    }
    const reject = (err) => {
      if (this.status !== STATUS_ENUM.REJECTED) {
        this.status = STATUS_ENUM.REJECTED
      }
      this.err = err
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
      const fulfilledCallback = () => {
        if (fulfilledHander instanceof MyPromise) {
          fulfilledHander.then(res => resolve(res))
        }
      }
      const rejectedCallback = () => {

      }
    })
  }
}