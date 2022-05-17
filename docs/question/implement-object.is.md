---
tag:
  - Coding
  - JavaScript
  - Easy

---
  
# implement Object.is()

## Question
[Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) is similar to `===` except following cases

```js
Object.is(0, -0) // false
0 === -0 // true

Object.is(NaN, NaN) // true
NaN === NaN // false
```

Here is the [detailed spec](https://www.ecma-international.org/ecma-262/6.0/#sec-samevalue), can you implement your own `is()`?

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-Object.is)

  