# 定义

创建一个可撤销的proxy对象


# syntax

> Proxy.revocable(target, handler)

> 返回一个可撤销的proxy对象

> 撤销后不可使用delete typeof

# Revocable Proxy

可撤销的proxy对象具有两个属性{proxy: proxy, revoke: revoke}
<img src="../../../../static/img/revocableProxy.png" width="800">




