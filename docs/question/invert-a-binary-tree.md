---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - easy
---

# invert a binary tree

Can you invert a binary tree and get an offer from Google?

> Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
>
> — Max Howell (@mxcl) [June 10, 2015](https://twitter.com/mxcl/status/608682016205344768?ref_src=twsrc%5Etfw)

Inverting a node means swapping its left child and right child. You need to apply this to all nodes. As following figure illustrates.

![](https://cdn.bfe.dev/bfe/img/12BVC9SRg5VfcADGpAjNN6ONgh8BlrDC_1068x546_1597951636139.png)

# 解析

```js
// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }
```

```js
/**
 * Recursion
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  // your code here
  if (!node) return node;
  [node.left, node.right] = [invert(node.right), invert(node.left)];
  return node;
}
```

```js
/**
 * Stack (Winner): we can also use Queue, but array.pop has better performance
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  const stack = [node];
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      [current.left, current.right] = [current.right, current.left];
      stack.push(current.left, current.right);
    }
  }

  return node;
}
```

[Source From](https://bigfrontend.dev/problem/invert-a-binary-tree)
