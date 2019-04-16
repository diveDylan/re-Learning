# 这是一些js的思想和底层

##[meta programming 元编程](/src/js/metaProgramming.md)


## 编译

传统的编译一般经历为三个步骤： 
  * 分词/词法分析: 将一连串字符打断成有意义的token片段。如：`var a = 2;`。将拆分成`var`, `a`, `=`, `2`, `;`,空格根据环境决定是否保留作为一个token标识。（语言都会当成字符进行分析）
  * 解析：将token的流数组转为一个嵌套展示程序的语法解构树，抽象语法树（AST —— Abstract Syntax Tree）
  * 代码生成
  ```
      var a = 2;
      /**
      * 第一步 var a
      * 第二部 a = 2 // a <-- 2
      */
  ```

  <img src="./static/img/ASTVarA=2.png" width="300">

### LHS查询和RHS查询
* LHS(Left-hand Side):变量出现在赋值操作的左手边，即被赋值
* RHS(Right-hadn Side):变量出现在赋值操作的右手边，引用，取
```
<!-- example -->
a = 2 // Lhs
b = a // Lhs:b Rhs: a
function foo(a) {
  console.log(a) // a的Rhs
}

foo(2) // a的Lhs： a = 2
 
```
