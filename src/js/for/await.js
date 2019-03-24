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

