`commonjs`和`esm`的区别
1、commonjs输出为值的拷贝，esm输出一个值的动态只读引用
    赋值后将不影响该变量，esm还是通过引用实时获取
    commonjs的赋值可以更改。esm的引入值不可更改
2、commonjs为同步加载先执行文件，esm是使用时再根据引用去取值
3、commonjs主要运行在node端，esm可以运用在服务器和浏览器端
4、commonjs基于node的module对象和require函数实现
   esm是基于exports 和 imports关键字实现
5、commonjs运行时加载，esm是编译时加载,只能在顶层引用
   这个esm无法替代commonjs的一个特点，也有import（）的提案
6、循环加载中，commonjs引用模块需要等引用模块加载完，才会执行后续，出现过的引用模块会从模块缓存中取
  esm是动态引用，需要开发者自己确认引用能否取到值