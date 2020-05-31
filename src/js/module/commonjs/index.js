let c, a
require('./a')
console.log(global.a,a)
// if (true) {
//   /**
//    * a是文件的拷贝，引入后续的改动不影响c
//    */
//    c = a
// } else {
  let ['1' + '2' ] = require('./b')
  c = b
// }
/**
 * Module is class Module
 * 这里的module 指的a的， c = a
 * {
 * * id: '/Users/zengxiangda/Projects/learn/re-Learning/src/js/module/commonjs/a.js'，// file path id
 * * exports: 1，// exports value,
 * * parent: [Circular],
 * * filename: '/Users/zengxiangda/Projects/learn/re-Learning/src/js/module/commonjs/a.js',
 * * loaded: true, // 是否已经加载
 * * children: [Array], // 子模块
 * * paths:
   [ '/Users/zengxiangda/Projects/learn/re-Learning/src/js/module/commonjs/node_modules',
     '/Users/zengxiangda/Projects/learn/re-Learning/src/js/module/node_modules',
     '/Users/zengxiangda/Projects/learn/re-Learning/src/js/node_modules',
     '/Users/zengxiangda/Projects/learn/re-Learning/src/node_modules',
     '/Users/zengxiangda/Projects/learn/re-Learning/node_modules',
     '/Users/zengxiangda/Projects/learn/node_modules',
     '/Users/zengxiangda/Projects/node_modules',
     '/Users/zengxiangda/node_modules',
     '/Users/node_modules',
     '/node_modules' ]
 * }
 */
// console.log('c', c, module, module.children, exports, require, global.c)

setTimeout(() => {
 let { Hello, count } = require('./a')
 const a = new Hello()
  console.log(a.getId()) 
  const b = new Hello()
  console.log(b.getId()) 
}, 2000)