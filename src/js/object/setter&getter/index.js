function expression(e) {
  return  e;
};
const a = 'male';


const Person = {
  get name() {
    const name =  "无名氏";
    console.log('get',name, this);
    return `姓名: ${name}`;
  },
  // 变量
  get [a]() {
    console.log('get expression：变量', a)
    return a;
  },
  // 函数 不支持
  // get [expression('name')] () {// e is not defined
  //   console.log('get expression：变量', expression(e))
  //   return expression(e);
  // },
  // 直接三元
  get [a === 'male' ? 'strong' : 'slim']() {
    return true;
  }
};

console.log(Person.name);
console.log(Person.male);
console.log(Person.strong);

// 不需要显示调用，动态返回值

const Logger = {
  list: ['warning', 'error', 'info', 'bug'],
  type: null,
  get hasType () {
    console.log('get');
    return this.list.indexOf(this.type) !== -1;
  },
  set hasType(val) {
    this.type = val;
    console.log('set', this);
  },
  get length() {
    // 保证长度大于1且为正数
    
  },
 
}

Logger.hasType = 'error'; // set { list: ['warning', 'error', 'info', 'bug'], type: 'error' }
console.log(Logger.hasType); // true
delete Logger.hasType;


// 使用

Object.defineProperty(Logger, 'addType', {
  get() {
    console.log('addType get', this,arguments);
    return ;
  },
  set(val) {
    console.log('addType set', val);
    return this.list.push( val);
  }
})

Logger.addType = 'unknow';
console.log(Logger.addType);

// 同时具有值和setter的情况
const hasVar = {
  set a(val) {
    console.log('can set');
    this.b = val;
    // return val
  },
  a: '111',
  b: null,
 
}
console.log(hasVar.a);
hasVar.a = '222';
console.log(hasVar.a);// undefined 不是'111' 被覆盖了


// 这部分代码测试很火的 object.defineProperty

let testObj = {
  a:1
};


Object.defineProperty(testObj, 'a', {
  // 不设置其他属性: writable之类
  get() {
    console.log('from definePropterty get');
    return 2;
  },
  set(val) {
    console.log('from definePropterty set', val);
  }
})

testObj.a = 3;
console.log(testObj);

// 这部分测试proxy
const p = new Proxy(testObj,{
  set: (obj, prop, val) =>  {
    if(prop === 'a') {
      console.log('proxy setting')
    }else {
      console.log('new property...')
    }
  }
})

p.a = 2; // proxy setting 
p.b= 3; // new property
console.log(p.a, testObj.a) // 代理之后会改变原对象



