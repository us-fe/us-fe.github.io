---
tag:
  - Coding
  - JavaScript
  - Easy

---
  
# find corresponding node in two identical DOM tree

## Question
Given two same DOM tree **A**, **B**, and an Element **a** in **A**, find the corresponding Element **b** in **B**.

By **corresponding**, we mean **a** and **b** have the same relative position to their DOM tree root.

_follow up_

This could a problem on general Tree structure with only `children`.

Could you solve it recursively and iteratively?

Could you solve this problem with special DOM api for better performance?

What are the time cost for each solution?

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  // your code here
}
```
:::
    
::::


## Related

+ [get DOM tree height](./get-DOM-tree-height)
##  Source
[Source From](https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree)

  