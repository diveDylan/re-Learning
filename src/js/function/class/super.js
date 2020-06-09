class Person {
  constructor(name) {
    this.name = name

  }
  sayHello() {
    console.log('hello, i am a person')
  }
}

class Man extends Person {
  constructor(args) {
    super(args)
    console.log('this', this)
  }
}