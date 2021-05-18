### 中间人攻击
1、不要轻易点击不可信证书
2、升级使用https
3、不要在共用wifi中登陆自己私人账号

### XSS Cross-site scripting 跨站脚本攻击
1、来源script资源、图片、html、flash，主要发送cookie来获取用户信息

2、类型
储存型：
  攻击脚本内容储存在服务器，浏览器发送请求后下载并执行
反射型：
  用户点击一个恶意连接（表单、网站等）
基于DOM
  更改原始dom代码类似jsonp

### 跨站请求伪造 (CSRF)

发送跨站请求带上cookie


### X-XSS-Protection

X-XSS-Protection: 0 禁止XSS过滤。
X-XSS-Protection: 1 启用XSS过滤（通常浏览器是默认的）。 如果检测到跨站脚本攻击，浏览器将清除页面（删除不安全的部分）。
X-XSS-Protection: 1; mode=block  启用XSS过滤。 如果检测到攻击，浏览器将不会清除页面，而是阻止页面加载。
X-XSS-Protection: 1; report=<reporting-uri>  启用XSS过滤。 如果检测到跨站脚本攻击，浏览器将清除页面并使用CSP report-uri (en-US)指令的功能发送违规报告。

### 内容安全策略 (CSP)

response： Content-Security-Policy
or meta： <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
