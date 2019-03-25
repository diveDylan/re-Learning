// 改变一个数组的默认迭代

const arr = [1,2,3];
const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: () => {
    return iterableFn(3)
  }
};
const iterableFn = function* (n = 2) {
  yield n;
  yield ++n;
  yield ++n;
};
arr[Symbol.iterator] = () => iterableFn(4);
// 数组的迭代
for(const i of arr) {
  console.log(i); //0, 1, 2
};
// 迭代指的是解构, for...of
console.log(...arr) // 2,2,3

for(let key of obj) {
  console.log(key);
};


const mapSource = {
  gender: 'male',
  age: '27',
  name: 'dylan'
};

const mapTarget = new Map(Object.entries(mapSource));
console.log(mapTarget);

// test map iterator

const myMap = new Map();
myMap.set('name', 'dylan');
myMap.set('age', 27);
myMap.set('gender', 'male');
console.log('myMap', myMap)
function testMapIterator(mapT) {
  for( const mapKey of mapT) {
    console.log(mapKey);
  }
}
function resetMapIterator(mapT) {
  const iteratorFn = function* () {
    yield `get Map: ${mapT}`;
    yield `set MapIterator: ${true}`;
    yield `see on the console`;
  }
  mapT[Symbol.iterator] = iteratorFn;
  testMapIterator(mapT);
}
// testMapIterator(myMap); 
console.log(...myMap);

testMapIterator(mapTarget);
resetMapIterator(myMap);


const mySet = new Set([1,3,2,4]);
console.log('mySet', mySet);

for(let setKey of mySet) {
  console.log(setKey);
}