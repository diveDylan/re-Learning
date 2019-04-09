


function Test(name, age, like) {
  this.name = name
  this.age = age
  this.like = like
  this.task = [() => {
    // 进入调用队列 
    this.next()
  }]
  // 初始化调用一次 利用事件队列收集事件
  setTimeout(() => {
    this.next()
  }, 0);
}
Test.prototype.next = function () {
  if(this.task.length) {
    let fn = this.task.shift()
    if(Object.prototype.toString.call(fn) === '[object Function]') {
      // Promise.resolve().then(() => this.sleepTimefn()
      fn()
    }
  }
}
Test.prototype.sayName = function() {
  const fn = () => {
    console.log(`I am ${this.name}`)
    this.next()
  }
  this.task.push(fn)
  return this
}

Test.prototype.logAge =  function() {
  const fn = () => {
    console.log(`I am ${this.age} years old`)
    this.next()
  }
  this.task.push(fn)
  return this
}

Test.prototype.logLike = function() {
  const fn = () => {
    console.log(`I like ${this.like}`)
    this.next()
  }
  this.task.push(fn)
  return this
}



Test.prototype.sleep = function(time) {
  // do somthing
  const fn = () => setTimeout(() => {
    this.next()
    console.log(new Date())
  }, time * 1000);
  console.log(new Date())
  this.task.push(fn)
  return this
}

// Test.prototype.exec = async function() {
//   this.task.reduce((a,b) => {
//     return a = await b
//   })
// }
let dylan = new Test('dylan', 27, 'sea')


// let b = dylan.logLike().sayName().sleep(1).logAge().sleep(4).sayName()
dylan.sleep(4).logAge().sleep(1).sayName()
