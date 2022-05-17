---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# implement `Math.clz32()`

## Question
[Math.clz32()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32) returns the number of leading zero bits in the 32-bit binary representation of a number.

Let's try to implement it by ourselves.

```js
clz32(1) // 31
clz32(10000) // 18
clz32(25.45) // 27
```

## Code
:::: code-group
::: code-group-item javascript
```javascript
/**
 * @param {number} num
 * @returns {number}
 */
function clz32(num) {
  // your code here
}
```
:::
    ::: code-group-item typescript:active
```typescript
function clz32(num: number): number {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/clz32)

  