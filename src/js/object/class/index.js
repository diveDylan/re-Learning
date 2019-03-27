'use strict';

class Person {
  static canSpeak = true;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHai() {
    console.log(Person.canSpeak ? `Hi, i am ${this.name}` : 'non-speaker');
  }
  // 这样是等同于constructor: this.sayHi = true 而不是定义在原型上
  sayHi = true
}
let a = new Person();
class Man extends Person {
  static isMale = true;
  static speak() {
    console.log(super.canSpeak ? 'wooo' : '')
  } 

  constructor(props) {
    super(props.name, props.age);
    this.swim = props.canSwim;
    this.talk = super.canSpeak 
  }
  swim = () => {
  
    console.log(this.swim ? 'He can swim~' : 'Be careful with water!');
  }
  con() {
    console.log(super.canSpeak)
  }
}

let dylan = new Man({name: 'dylan', age: 2, canSwim: true});
dylan.sayHai();
Man.speak()
console.log(a, dylan, );


class Test {
  static test = true
  constructor() {
    this.title = 'this'
  }
  
  say() {
    console.log('say',this.hi)
  }
  hi = () => {
    console.log('hi', this.say)
  }
}

let test = new Test();
test.say();
test.hi();

let { hi, say } = test;
hi()
say()