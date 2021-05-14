function quickSort(arr) {
  if (arr.length < 2) return arr
  let len = arr.length
  let base = arr[Math.floor(len / 2)]
  let left = [], right = [], center = []
  for(let i =0; i < len; i ++) {
    if (arr[i] < base) {
      left.push(arr[i])
    } else if (arr[i] ===base) {
      center.push(arr[i])
    } else{
      right.push(arr[i])
    }
  }
  
  return quickSort(left).concat(center, quickSort(right))
}

function bubbleSort(arr) {
  let len = arr.length - 1
  while(len) {
    for(let i = 0; i < len; i ++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      }
    }
    len --
  }
  return arr
}

function selectionSort(arr) {
  let len = arr.length
  let j = 0
  while(j < len) {
    let min = arr[j]
    let pre = j
    for(let i = j + 1; i < len; i ++) {
      if (min > arr[i]) {
        pre = i
        min = arr[i]
      }
    }
    // change places
    [arr[j], arr[pre]] = [min, arr[j]]
    j ++
    
  }
  return arr
}



var buildTree = function (preorder, inorder) {
  // let p = (i = 0);
  // function newTree(stop) {
  //   if (inorder[i] !== stop) {
  //     let root = new TreeNode(preorder[p++]);
  //     // 先找到最left的节点 inorder遍历 第一个 l -> m -> r -> mp -> mpr
  //     // inorder 0 left最深节点 1 left 的父节点，上级调用栈，2 right
  //     // preorder r -> l -> l -> l
  //     root.left = newTree(root.val);
  //     i++;
  //     // 父级调用栈选用 parent.stop
  //     root.right = newTree(stop);
  //     return root;
  //   }
  //   return null;
  // }
  // return newTree();
  function find(preoder, inorder) {
    if (preoder.length === 1) return preoder[0];
    let root = new TreeNode(preoder[0]);
     debugger
    console.log(preoder, inorder, Object.prototype.toString.call(inorder));
    let ir = inorder.findIndex(preoder[0]) + 1;
    let pr = preoder.findIndex(inorder[0]) + 1;
    root.left = find(preoder.slice(1, pr), inorder.slice(0, ir));
    root.right = find(preoder.slice(pr), inorder.slice(ir));
    return root;
  }
  return find(preorder, inorder);
};
undefined
buildTree([3,9,20,15,7],
[9,3,15,20,7])