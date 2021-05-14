/**
 * @vnode
 * *   flag: string
 * *   children?: Array<Vnode>
 * @param {input} string <div><div><p>1</p></div></div>
 * @notice normally we have a root element
 * @假设不出现 < < /字符
 */
function createVnode(input) {

  let len = input.length

  // stack & nodeid
  // <div><div><p><span>1</span></p><p>2</p></div></div>
  // 1 div -> div -> p -> span ->  pre = 1
  // 2、span {tag: span, children: [pre]} -> pre
  // 3、p { tag: p, children: [pre] } -> pre
  // 4、div -> div -> p
  // 5、div -> div -> p -> 2
  // * parent always after pop action the stack end
  const stack = [{
    children: []
  }]
  let pre
  for(let i = 0; i <len -1; i ++) {
    let str = input[i]
    let j = i + 1
    switch(str) {
      // push start
      case '<':
        // maybe a element tag, we take it as element type ignore others
        // if we need consider we should has a element type array
        const isEnd = input[j] === '/'
        if (isEnd) { j ++}
        while (input[j] !== '>') {
          str += input[j]
          j ++
        }
        if (isEnd) {
          let node = stack.pop()
          let parent = stack[stack.length - 1]
          parent.children.push(node)
        } else {
          const tagName =  str.replace( /\</, '')
          stack.push({
            tag: tagName,
            children: []
          })
        }
        i = j
        break
      default:
        while (input[j] !== '<') {
          str += input[j]
          j ++
        }
        stack[stack.length-1].children.push(str)
        i = j - 1
    }

  }
  return stack[0].children

}



