/***

deserialization([0, 'a', 1, 'b', 2, 'c', 3, 'e', 2, 'd', 1, 'x', 0, 'ff'])
=>
{
    a: {
        b: {
            c: {
                e: null
            },
            d: null
            },
        x: null
    },
    ff: null
}

0: { a: null } key [0, a]  { preKey: a, value: {a: null}} 
1: { a: { b: null} } key[1,b] { preValue[key] = {b: null} }
2: { a: {b: { c: null}}}
3: { a: { b: {c: { e: null}}}}
4: { a: { b: { c: { e: null }, d: null}}}
5: { a: { b: { c: { e: null}, d: null}, x: null}}
6: { a: { b: { c: { e: null}, d: null}, x: null}, f: null}




*/

function deserialization(arr) {
    let obj = {} 

    let len = arr.length
  
    for(let i =0; i < len - 1; i += 2) {
        debugger
        let index = arr[i]
        let key = arr[i + 1]
        if (!obj[index]) {
          obj[index] = {
            key: key,
            value: {
                [key]: null
            }
          } 
            
        }
        else {
            let val = obj[index]
            valkey = key
            val.value[key] = null

        }
        if (index > 0) {
              obj[index - 1].value[obj[index-1].key] = obj[index ].value
          }

    }
    return obj[0].value

}
deserialization([0, 'a', 1, 'b', 2, 'c', 3, 'e', 2, 'd', 1, 'x', 0, 'ff'])