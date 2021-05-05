
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
    let s = sql.replace(/\[/g, '.').replace(/\]/, '')
    return !!s ? s.split('.') : ['']
  }
  return reset.map(item => {
    let sql = getSqlOrder(item)
    return sql.reduce((a, b) => {
      console.log(a, b, a[b])
      return a[b]
    }, obj)
  })
}
 

function compose(...rest) {
  return rest.reduce((a,b) => arguments => a(b(arguments)))
}
function step1(next) {
  console.log('step1 start')
  next()
  console.log('step1 end')
} 

function step2(next) {
  console.log('step2 start')
  next()
  console.log('step2 end')
}
function step3(next) {
  console.log('step3 start')
  next()
  console.log('step3 end')
}