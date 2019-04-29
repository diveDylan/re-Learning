# 支付宝小程序learning（调研阶段）

> [官方文档](https://docs.alipay.com/mini/developer/getting-started)


## 发布小程序

当确认代码没有问题后，点击右上角上传，点击确认后，会将代码发布到小程序的后台，这时候会在小程序的后台生成一个开发版本的小程序。如果多次点击上传，那么会生成一个新的版本的小程序，后面的版本不会覆盖前面的。

> [灰度发布](https://docs.alipay.com/mini/introduce/release)



## App

 ### 钩子事件
  * onLanch: 小程序启动
  * onShow: 小程序切换到前台 **不要在 onShow 中进行 redirectTo/navigateTo 等操作页面栈的行为。**
  * onHide: 小程序切换到后台
  * onError: 小程序出错

```
App({
  // 小程序启动，小程序初始化的时候触发，全局触发一次
  onLanch(options) {
    /**
    * options { query 当前小程序的query, path 当前的页面地址, referrerInfo 来源信息}
    */
    console.log(options) 
  },
  // 当小程序启动，或从后台进入前台显示时触发
  onShow(options) {
    console.log(options)
  },
  // 小程序切换到后台
  onHide() {},
  // 小程序出错
  onError(msg) {
    console.log(msg)
  },
  // 全局数据
  globalData: {},
  // 全局分享配置，页面未设置分享的时候执行
  onShareAppMessage() {}
})
<!-- options  -->
alipays://platformapi/startapp?appId=1999&query=number%3D1&page=x%2Fy%2Fz
--> query = decodeURIComponent('number%3D1');
// number=1
--> path = decodeURIComponent('x%2Fy%2Fz');
// x/y/z
```

App(Object)其实相当于一个构造函数，创建了全局唯一实例App




## pages


 **不要修改page.data**
 ```
 <!-- bad ❎  -->
Page({
 data: { arr:[] },
 doIt() {
   this.data.arr.push(1);
   this.setData({arr: this.data.arr});
 }
});
/**
* 由于 data 为对象时所有页面共享，因此如果该页面回退（back）后再次进入则显示为上一次的数据
* 可以使用不可变数据或者变更 data 为页面独有
*/
 <!-- good ✅-->
 Page({
 data: { arr:[] },
 doIt() {
   this.setData({arr: [...this.data.arr, 1]});
 },
});

<!-- 页面独有 🚫-->

Page({
 data() { return { arr:[] }; },
 doIt() {
   this.data.arr.push(1);
   this.setData({arr: this.data.arr});
 }
});

 ```

 ### 页面跳转
 **my.navigateTo**
 保留当前页， 跳转到其他页面，相当于新开页面，最大深度为10

 