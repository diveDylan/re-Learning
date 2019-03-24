// user-defined asyncIterator

const myAsyncIterator = new Object();

myAsyncIterator[Symbol.asyncIterator] = async function* () {
  yield {
    index: 'first',
    value: 'Object',
  };
  yield {
    index: 'second',
    value: 'iterable',
  };
  yield {
    index: 'third',
    value: 'async',
  };
  yield {
    index: 'last',
    value: 'finished',
  };
};

async function testIterator(iterator) {
  for await (let {index, value} of iterator) {
    console.log(`${index} must be : ${value}`);
  }
};

// testIterator(myAsyncIterator);

// 解构写法，尝试下

[...myAsyncIterator]