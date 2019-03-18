function Person(gender, name, canSpeak) {
  this.gender = gender;
  this.name = name;
  this.canSpeak = canSpeak || true;
  _run = false; // 私有变量
}
Person.prototype.sayHi = function () {
  console.log(_run);
  console.log(`Hi, I'm ${this.name}`);
}

function Boy(hobies, name) {
  Person.call(this, 'male');// 继承属性，不继承原型, 申明参数则赋值，否则默认值
  this.hobies = hobies;
}

//引用地址， 绑定原型为Person, 子改变影响父
// Boy.prototype = Person.prototype;
let nvWa = new Person('female', 'nvwa');
let dylan = new Boy(['swimming'], 'dylan');


// Object Create
console.log(Object.create(Person.prototype)); // person.prototype;
Boy.prototype = Object.create(Person.prototype)

// 使用实例的_proto_
Boy.prototype.swim = () => {
  if(this.hobies.includes('swimming')) {
    console.log(`${this.name} is good at swim~`);
  }else {
    console.log(`Away from water, you cann't swim!!!`);
  }
}



// console.log(Person, Boy, nvWa, dylan, Person.prototype.valueOf())
console.log( dylan,nvWa);
console.log( Person.length, Boy.length); // 3 , 2 申明函数的形参
console.log(dylan.length, nvWa.length); // undefined undefined;

console.log(Person.prototype, Boy.prototype)