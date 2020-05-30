Node.js是commonJS规范的主要实践者，它有四个重要的环境变量为模块化的实现提供支持：module、exports、require、global。实际使用时，用module.exports定义当前模块对外输出的接口（不推荐直接用exports），用require加载模块。

主要特点同步加载
输出为文件的拷贝

```js
TPYE MODULE
Module {
   id: '/Users/zengxiangda/Projects/learn/re-Learning/src/js/module/commonjs/a.js'，// file path id
   exports: 1，// exports value, exports api
   parent: [Circular],
   filename: '/Users/zengxiangda/Projects/learn/re-Learning/src/js/module/commonjs/a.js',
   loaded: true, // 是否已经加载
   children: [Array], // 子模块
   paths:
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
 }

 TYPE REQUIRE
 function require(path) {
    try {
      exports.requireDepth += 1;
      return mod.require(path);
    } finally {
      exports.requireDepth -= 1;
    }
  }
 ```
