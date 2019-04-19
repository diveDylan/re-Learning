const Dylan = {
  name: 'dylan',
  age: '27',
  [Symbol('like')]: 'dive'
}

let proxyDy = new Proxy(Dylan, {
  get: function(target, prop, recevier) {
    console.log(this, 'getting')
    console.log(target, prop, recevier)
  }
})

console.log(proxyDy.name)