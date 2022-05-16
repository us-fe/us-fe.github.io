---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - medium

---
  
# implement BigInt subtraction

## Question
Luckily we already have built-in support of [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) in JavaScript, at least in some browsers.

```js
1000000000000000000000n - 999999999999999999999n
// 1n
```

Suppose BigInt cannot be used, can you implement a string subtraction function by yourself?

```js
subtract('1000000000000000000000', '999999999999999999999')
// '1'
```

All input are valid **non-negative integer strings**, and the result is guaranteed to be non-negative.

_Don't use BigInt directly, it is not our goal here_

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function subtract(num1, num2) {
  // your code here
}
```
:::
    
::::


## Related

+ [implement BigInt addition](./add-BigInt-string)
+ [implement BigInt addition with sign](./implement-BigInt-addition-with-sign)
+ [implement BigInt subtraction with sign](./implement-BigInt-subtraction-with-sign)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-BigInt-subtraction)

  