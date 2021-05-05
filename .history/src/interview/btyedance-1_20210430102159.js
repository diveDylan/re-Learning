
const obj = {
    selector: { to: { toutiao: 'FE coder' } },
    target: [1, 2, { name: 'byted' }]
};
/* 运行代码 */
//   get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
 
/*  输出结果：
['FE coder', 1, 'byted'] */

function myGet(obj, sql1, sq12, sq13 ) {
  if (typeof obj !== 'object') {
    throw Error(`illeage parameter obj: ${obj}`)
  }
}
 