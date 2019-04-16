let obj = {
  a: 1,b:2
}
let reProxy = Proxy.revocable(obj,{
  get: function(target, props) {
    return {
      [props]: target[props]
    }
  }
})

console.log(reProxy.revoke, new Proxy({b: 1}, {}))
// reProxy.proxy 访问属性代理对象
console.log(reProxy, reProxy.proxy.a,obj.a, typeof reProxy)
//取消代理 set reProxy.proxy.IsRevoked: true, 将无法使用typeof delete
reProxy.revoke()

console.log(reProxy, reProxy.proxy)