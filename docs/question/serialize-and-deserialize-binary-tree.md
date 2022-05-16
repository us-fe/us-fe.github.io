---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - medium

---
  
# serialize and deserialize binary tree

## Question
Can you transform(serialize) a binary tree into a string and restore(deserialize) a binary tree from the string? Just like what [JSON.stringify()](https://bigfrontend.dev/problem/implement-JSON-stringify) and [JSON.parse()](https://bigfrontend.dev/problem/implement-JSON-parse) do.

For example, for a tree from [91\. invert a binary tree](https://bigfrontend.dev/problem/invert-a-binary-tree)

![](https://cdn.bfe.dev/bfe/img/5HqzC2BPLAY1oao78DrYhs9wXTV4msLP_1169x546_1598270209815.png)

BFE.dev would serialize it to `[1,2,3,4,null,null,5,6,7,8,null,null,null,null,9]`

But there are more ways of doing it rather than above, any would be fine as long as your `deserialize()` and `serialize()` work as a pair.

Your code is tested like this:

```js

const tree1 = ...
expect(typeof serialize(tree1)).toBe('string')

const tree2 = deserialize(serialize(tree1)) 
expect(isIdentical(tree1, tree2)).toBe(true)
```

Binary tree in this problem consists of value of integers.

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
 * @return {string}
 */
function serialize(root) {
  // your code here
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/serialize-and-deserialize-binary-tree)

  