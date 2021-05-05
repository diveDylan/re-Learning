// 100ms触发多次重新计时，只执行最后一次
// 也就是多久不执行后执行该函数
function debounce(fn, time, immediate) {
    let timer
    return (...rest) => {
        if (timer) {
            clearTimeout(timer)
        }
        if (immediate) fn(...rest)
        timer = setTimeout(() => {
            fn(...rest)
            clearTimeout(timer)
        }, time)
    }
}
// 100ms的频率执行该函数
function throttle(fn, time, immediate) {
    let pre, timer
    return function() {
        let context = this
        let args = arguments.slice()
//         if (timer) return 
//         if (immediate) {
//             fn.apply(this,args)
//         }
//         timer = setTimeout(() => {
//           fn.apply(this,args)  
//         }, time)
        
        if (!pre && immediate) {
            fn.apply(this,args)
            pre = Date.now()
        }
        if (Date.now() - pre < time) {
            return 
        } else {
            fn.apply(this,args) 
            pre = Date.now()
        }

    }
}