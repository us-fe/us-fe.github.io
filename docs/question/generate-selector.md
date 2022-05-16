---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# Generate CSS Selector for target element

## Question
Given a DOM tree and a target element, generate a valid selector to target it.

For example, for a DOM tree like below

```html
<div>
  <p>BFE.dev</p>
  <div>
    is
    <p>
      <span>great. <button>click me!</button></span>
    </p>
  </div>
</div>
```

There could be more than 1 answer.

```js
let selector = generateSelector(root, target) // 'button'
expect(root.querySelector(selector)).toBe(target)

selector = generateSelector(root, target) // 'div > div > p > button'
expect(root.querySelector(selector)).toBe(target)
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {string}
 */
function generateSelector(root, target) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function generateSelector(root: HTMLElement, target: HTMLElement): string {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/generate-selector)

  