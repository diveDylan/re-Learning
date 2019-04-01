let fromObject = {
  a: 1,
  b: 2
};
Object.defineProperty(fromObject, 'c', {
  enumerable: false
})
// fromObject.prototype.hasA = true;

let createObject = Object.create(fromObject);

console.log(createObject, fromObject);

// test
function Test() {
  this.type = "test";
  this.isLast = false;
};

Test.prototype.finish = function() {
  if(this.isLast) {
    console.log('finished', this);
  }
};

let testCopyProto = Object.create(Test.prototype);
let testCopy = Object.create(Test);
console.log(Test, testCopy, testCopyProto);


// 原型链继承

function FinalyTest() {
  this.type = "test";
  this.isLast = true;
};

// 继承原型
FinalyTest.prototype = Object.create(Test.prototype);
FinalyTest.prototype.end = 'now';
// 指定constructor
FinalyTest.prototype.constructor = FinalyTest;

let lastExam = new FinalyTest();
lastExam.finish();

// 多个继承

function SportFinalyTest() {
  Test.call(this);
  FinalyTest.call(this);
}

// 原型继承
SportFinalyTest.prototype = Object.create(Test.prototype);
Object.assign(SportFinalyTest.prototype, FinalyTest.prototype);
SportFinalyTest.prototype.constructor = SportFinalyTest;

let sportFinish = new SportFinalyTest();
console.log(sportFinish);


console.log(Object.create(null), Object.create(Object.prototype));

let o = Object.create(Object.prototype, {
  foo: {
    writable: true,
    configurable: false,
    value: "hello",
    enumerable: false,
  },
  bar: {
    configurable: false,
    get: () => {
      return 10;
    },
    set: (value) => {
      console.log('setting');
    }
  }
}); 
Object.defineProperty(o, 'cool', {
  get() {
    return 'cool';
  },
  set(val) {
    console.log('cool start')
  }
})

console.log(o);

if(!Object.prototype.myCreate) {
  Object.prototype.myCreate = function(proto) {
    if( typeof proto !== 'object' &&  typeof proto !== 'function') {
      throw new TypeError(`${proto} is not a object`)
    }else {
      function F() {

      }
      // F.prototype = {...proto}
      // F.prototype = JSON.parse(JSON.stringify(proto))
      
      // F.prototype = proto
      F.prototype = Object.assign({}, proto)
      return new F()
    }
  }
}

function TT() {
  
}

TT.prototype.say = function () {
  console.log(' i am TT')
}

TT.prototype.name = 'TT'
function EE() {

}
 EE.prototype = Object.myCreate(TT.prototype)
 EE.prototype.name = "EE"

let mm = new EE()

let nn = new TT()

TT.prototype.name = "GG"


console.log(mm, mm.name, nn, EE, TT)