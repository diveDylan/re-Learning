/**
 * @vnode
 * *   flag: string
 * *   children?: Array<Vnode>
 * *   props: {
 * *        className
 * *   }
 * @param {input} string <div><div><p>1</p></div></div>
 * @notice normally we have a root element
 * @假设不出现 < < /字符
 * @TODO deal with props styles
 * "<div class=\"red\" style=\"width: 100px\" onClick=\"alert(1)\" ><p>1</p><ul><li>111<a>sss</a></li></ul></div>"
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
          // const tagName =  str.replace( /\</, '')
          str += '>'
          const tagName = str.match(/\<([a-z]+)\s?/)[1]
          // deal with attribute and event
          let props = null
          console.log(str, /\<[a-z]+\s(.+)\>/.test(str))
          if (/\<[a-z]+\s(.+)\>/.test(str)) {
            let propsString = str.match(/\<[a-z]+\s(.+)\>/)[1]

          if (propsString.length) {
            props = {}
            let propsList =
            propsString
                .replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                .split('" ')
                .map(propsStr => propsStr.split('='))
            propsList.forEach(propsItem => {

              if (propsItem[0].startsWith('on')) {
                let eventKey = propsItem[0].toLowerCase().slice(2)
                props.on = props.on || {}
                props.on[eventKey] = propsItem[1]
              } else {
                props[propsItem[0]] = propsItem[1]
              }
            })

          }
          }

          stack.push({
            tag: tagName,
            props,
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



