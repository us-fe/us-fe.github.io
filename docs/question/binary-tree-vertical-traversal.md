---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - hard?

---
  
# binary tree vertical traversal

## Question
Traverse a binary tree vertically from left to right, from top to bottom, the binary tree contains positive integers as node values.

![](https://cdn.bfe.dev/bfe/img/TiapkDukk2cfibNmKtYzq8d6AHeRGiKp_470x605_1604825105283.png)

For above binary tree, vertical traversal should return

```js
[6,4,2,7,1,9,10,3,8,5]
```

If two nodes are at the same position, their order should inherit from their parent node. For example, 9 and 10 are at the same position, since 7 is before 8, so 9 should be before 10.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

/**
 * @param {Node} root
 * @returns {number[]}
 */
function traverse(root) {
  // your code here
}
```
:::
    
::::


## Related

+ [serialize and deserialize binary tree](./serialize-and-deserialize-binary-tree)
##  Source
[Source From](https://bigfrontend.dev/problem/binary-tree-vertical-traversal)

  