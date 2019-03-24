/**
 *  先学习 defineProperty
 *  @ after 学习 defineProperties
 */

const target = {
  a: 1
};

const description = {
  set(val) {
    console.log(val, 'setting');
  },
  get() {
    return 'description';
  },
  configurable: false,
  enumerable: true
};


Object.defineProperty(target, 'c', description);
target.c = 'getnew';
console.log(target);


const dataDescriptions = {
  configurable: false,
  enumerable: false,
  writable: false,
  value: 'default'
};

Object.defineProperty(target, 'd', dataDescriptions);

target.d = 'asdsd';

console.log(target);



// test mdn code 

function withValue(value) {
  var d = withValue.d || (withValue.d = {
    enumerable: true,
    configurable: false,
    value: null,
    writable: true,
  });
  console.log(d)
  if(d.value !== d) d.value = value;

  return d;
}

Object.defineProperty(target, 'key', withValue('static'));

console.log(target);

Object.defineProperty(target, Symbol.for('e'), {
  value: 5,
  enumerable: true
});
// try to reset the attrutide unconfigurable
Object.defineProperty(target, 'key', {
 value: 'nbew',
});

console.log(target, target.d);

for(let i in target) {
  console.log(i);
}

console.log(Object.keys(target));


const obj = {
  a: 1
};

// Object.defineProperty(obj, 'b', {
//   get() { return 1; },
//   configurable: false,

// });

// Object.defineProperty(obj, 'b', {
//   set(val) {
//     console.log('setting', val);
//     return val;
//   }
// })


obj.b = 'ccc';


// object defineProperty 数据描述符和存取描述符 在prototype 的区别

function DefinePropotype() {

};

Object.defineProperty(DefinePropotype.prototype, 'desc', {
  set(val) {
    console.log('.....setting',val);
    this.d = val;
  },
  get() {
    
    return 2;
  }
});

let a = new DefinePropotype();
let b = new DefinePropotype();
a.desc = 'aDesc';
console.log(a, b, b.desc);

function DataDefinePrototype() {
  DefinePropotype.call(this);
};


Object.defineProperty(DataDefinePrototype.prototype, 'ds', {
  configurable: false,
  enumerable: true,
  writable: true,
  value: 1,
});

let c = new DataDefinePrototype();
let d = new DataDefinePrototype();
c.ds = 2;

console.log(a, b, c, d);

