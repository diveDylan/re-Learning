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
    this.status =  STATUS_ENUM.PENDING
    this.fulfilQueue = []
    this.rejectQueue = []
    const resolve = (val) => {
      if (this.status !== STATUS_ENUM.FULFILLED) {
        this.status = STATUS_ENUM.FULFILLED
      }
      this.val = val
    
      this.fulfilQueue.forEach(fn => {
        fn(val)
      })
    }
    const reject = (err) => {
      if (this.status !== STATUS_ENUM.REJECTED) {
        this.status = STATUS_ENUM.REJECTED
      }
      this.err = err
      this.rejectQueue.forEach(fn => {
         fn(err)
      })
    }
    try {
      excotor(resolve, reject)
    }catch(err) {
      reject(err)
    }
  }

  static resolve(x) {
    return x instanceof MyPromise ? x : new MyPromise(resolve => resolve(x))


  }
  static reject() {

  }

  static all(arr) {
    return new MyPromise((resolve, reject) => {
      let count = 0
      let returnArr = []
      arr.forEach( (item, index) => {
          item.then(res => {
             console.log('resolve', index)
          returnArr[index] = res
          count ++
          if (count === arr.length) {
            resolve(returnArr)
          } 
          }, err => reject(arr))
          
          
        
      })
    })
  }
  static race(arr) {
    let resolved = false
    return new MyPromise((resolve, reject) => {
      arr.forEach(item => {
        item.then(res => {
          if (!resolved) resolve(res)
        }, err => {
          if (!resolved) reject(res)
        })
      })
    })
  }

  then(fulfilledFn, rejectedFn) {
    let _this = this
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
      const rejectedCallback = (error) => {
        try {
          let res = rejectedHandler(error)
          if (res instanceof MyPromise) {
            res.then(res => resolve(res), err => reject(err))
          } else {
            reject(res)
          }
        } catch(err) {
          reject(err)
        }
      }
    
      switch(_this.status) {
        case STATUS_ENUM.PENDING: 
          _this.fulfilQueue.push(fulfilledCallback)
          _this.rejectQueue.push(rejectedCallback)
          break
        case STATUS_ENUM.FULFILLED:
          fulfilledCallback(_this.val)
          break
        case STATUS_ENUM.REJECTED:
          rejectedCallback(_this.err)
          break
      }
    })
  }
}