
const obj = {
    selector: { to: { toutiao: 'FE coder' } },
    target: [1, 2, { name: 'byted' }]
};
/* 运行代码 */
//   get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
 
/*  输出结果：
['FE coder', 1, 'byted'] */

function myGet(obj, ...reset ) {
  if (typeof obj !== 'object') {
    throw Error(`illeage parameter obj: ${obj}`)
  }
  function getSqlOrder(sql) {
    return !!sql ? sql.split('.') : ['']
  }
  return reset.map(item => {
    let sql = getSqlOrder(item)
    return sql.reduce((a, b) => {
      console.log(a, b)
      return a[b]
    }, obj)
  })
}
 