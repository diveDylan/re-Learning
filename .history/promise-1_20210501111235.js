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

  then() {

  }
}