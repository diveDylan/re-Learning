class Person {
  constructor(name) {
    this.canSpeak = true
    this.name = name
  }
  // this.name
  say = true
  walk() {
    console.log(111)
  }
}
class Man extends Person  {
  constructor() {
    super()
    this.strong = true
  }
  go(){
    
  }

}
Man.prototype.swimmer = true
let g = new Person();
let dylan = new Man('dylan')
dylan.walk()
console.log(g,dylan)
console.log(dylan.hasOwnProperty('say'))
console.log(dylan.hasOwnProperty('go'))
console.log(dylan.hasOwnProperty('swimmer'))
console.log(dylan.hasOwnProperty('toString'))