function excutor(arr, limitLength) {
    let result = []
    let index = 0, waitList =[]
 
        
    while(waitList.length < limitLength -1 && index < arr.length) {
        waitList.push({
           current: index,
           fn: arr[index ++]
        })
    }
    next()
    function next() {
        waitList.push({
               current: index,
               fn: arr[index ++]
            })
        while(waitList.length) {
        const { current, fn} = waitList.shift()
        console.log(fn)
        fn.then(res => {
           result[current] = res
           if (index < arr.length)next()

        })

     }
    }
    
}