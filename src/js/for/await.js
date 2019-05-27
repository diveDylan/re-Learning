function* testGenerator() {
  yield 'dylan';
  yield 'learn';
  yield '"for await ... of "syntax';
  return 'finished';
};
let test = testGenerator();

// 面试题不使用next的情况下输出
(async () =>{
  for await (let key of test) {
    console.log(key);
  }
})();




// 目前返回格式
const currentResponseBody = { 
  "success": true, //  根据状态码判断是否成功
  "message": "", // 错误信息
  "code": "",  // 返回码
  "pageNum": null, // pageSize，pageNo入参部分无需返回，
  "pageSize": null, 
  "value": [], // 返回主体内容
  "additionalInfo": {}, 
  "resultType": null, 
  "resultClassType": null
}
// 期待返回格式   **swagger返回值字段没有注释**
const responseBody = { 
  "message": "", // 状态信息，全局统一规范化的返回信息，
  "code": "",  // 返回状态码，全局统一规范的状态码，如：token过期，无权限，参数error
  "content": {} // 返回主体数据内容
}