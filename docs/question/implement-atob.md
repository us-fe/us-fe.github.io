---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# implement atob()

## Question
[atob()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob) decodes a string of data which has been encoded using Base64 encoding.

Please implement your own `myAtob()`

```js
myAtob('QkZFLmRldg==') // 'BFE.dev'
myAtob('Q') // Error
```

Please don't use `atob()` directly in your code.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {string} encoded
 * @return {string}
 */
function myAtob(encoded) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function myAtob(encoded: string): string {
  // your code here
}
```
:::
    
::::


## Related

+ [implement btoa()](./implement-btoa)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-atob)

  