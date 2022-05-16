---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# semver compare

## Question
Please implement a function to compare 2 [semver](https://semver.org/) strings.

```js
compare('12.1.0', '12.0.9')
// 1, meaning first one is greater

compare('12.1.0', '12.1.2')
// -1, meaning latter one is greater

compare('5.0.1', '5.0.1')
// 0, meaning they are equal.
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function compare(v1: string, v2: string): 0 | 1 | -1 {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/semver-compare)

  