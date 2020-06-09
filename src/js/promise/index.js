const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
const PENDING = 'PENDING' 
class myPromise {
  constructor(handler) {
    this.state = PENDING
    this.value = null
    this.fulfilledQueen = []
    this.rejectedQueen = []
    this.reason = null
    const _resolve = (value) => {
      setTimeout(() => {
        if(this.state === PENDING) {
          this.state = FULFILLED
          this.value = value
          this.fulfilledQueen.map((cb) => {
            this.value = cb(this.value)
          })
        }
      }, 0)
    }
    const _reject = (reason) => {
      setTimeout(() => {
        if(this.state === PENDING) {
          this.state = FULFILLED
          this.reason = reason
          this.fulfilledQueen.map((cb) => {
           this.reason =  cb(this.reason)
          })
        }
      }, 0)
    }
    try{
      handler(_resolve, _reject)
    }catch(e) {
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    let aPromise
    function resolvePromise(aPromise, val) {
      
    }
    return (aPromise = new myPromise((resovle, reject) => {
      this.fulfilledQueen.push((val) => {
        let x = onFulfilled(val)
        resolvePromise(aPromise, x, resovle, reject)
      })
      this.rejectedQueen.push((val) => {
        let x = onRejected(val)
        resolvePromise(aPromise, x, resovle, reject)
      })
    })
    )
  }


}

new myPromise((resolve, reject) => {
   setTimeout(() => {
     resolve('dylan')
   }, 0);
 }).then((val) => {
   console.log(val)
   return val + 1
 }).then((val) => {
   console.log(val)
 }
 