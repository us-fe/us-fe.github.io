---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - DOM
  - Easy

---
  
# get DOM tree height

## Question
Height of a tree is the maximum depth from root node. Empty root node have a height of 0.

If given DOM tree, can you create a function to get the height of it?

For the DOM tree below, we have a height of 4.

```html
<div>
  <div>
    <p>
      <button>Hello</button>
    </p>
  </div>
  <p>
    <span>World!</span>
  </p>
</div>
```

Can you solve this both recursively and iteratively?

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  // your code here         
}
```
:::
    
::::


## Related

+ [find corresponding node in two identical DOM tree](./find-corresponding-node-in-two-identical-DOM-tree)
##  Source
[Source From](https://bigfrontend.dev/problem/get-DOM-tree-height)

  