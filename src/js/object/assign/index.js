
const fromObject = {
  a: 1,
  b: 2,
};

const addProto = {
  c: 2,
  a: 'a' // can overwritten target property a
};
// addProto.prototype.f = 'bad';

const assignObject = Object.assign(fromObject, addProto);
// 不改变目标对象
const assignObject2 = Object.assign({...fromObject}, addProto);
const assignObject3 = Object.assign({}, fromObject, addProto)

fromObject.d = 4;
addProto.d = 5;
console.log(assignObject, fromObject);// 源对象的改变不会映射到目标对象
console.log(assignObject2, fromObject);
console.log(assignObject3, fromObject);


//  若clone属性为对象或者引用类型，改变将映射到clone object

const target = {
  a: 1,
  b: 2
};

const source = {
  c: {
    deep: false
  },
  d: [1,2,3]
};

let cloneObject = Object.assign(target, source); // or {...source}

// deep clone method
// debugger;
let deepObject = Object.assign(target, JSON.parse(JSON.stringify(source)));

source.c.deep = true;
source.d[0] = 4;

console.log('浅克隆',cloneObject);
console.log('深克隆',deepObject);
// clone get none
console.log(Object.assign({}, 6, true,undefined, Symbol('foo')));
// clone String or Array
console.log(Object.assign({}, 'abc')); // { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.assign({}, [1,2,3]))// { 0: 1, 1: 2, 2: 3}






