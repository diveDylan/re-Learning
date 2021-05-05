/**
 * @description 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
 * @param {*} callback(accumulator, currentValue, currentIndex, array)
 * * accumulator 累计器
 * * currentValue 当前值
 * * currentIndex 当前索引
 * * array 数组
 * @param {*} initValue 
 */
Array.prototype.myReduce = function (callback, initValue) {

}

callback()