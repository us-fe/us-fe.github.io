---
tag:
  - Coding
  - JavaScript
  - DOM
  - medium

---
  
# Previous Left Sibling

## Question
Given a DOM tree and a target element, please return the **previous left sibling**.

![](https://cdn.bfe.dev/bfe/img/2a737BvrqUaK1F9YnxrD1JkYV58y8Le8_1063x546_1621897998092.png)

Like above, the previous left sibling of green `<a/>` is the blue `<button/>`. Notice that **they don't necessarily have the same parent element.**

If no left sibling, then return `null`.

What is time & space cost of your solution ?

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {Element} root
 * @param {Element} target
 * @return {Elemnt | null}
 */
function previousLeftSibling(root, target) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function previousLeftSibling (root: Element, target: Element): Element | null {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/previous-left-sibling)

  