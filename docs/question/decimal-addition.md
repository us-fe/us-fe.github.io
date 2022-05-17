---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - Medium

---
  
# BigDecimal addition

## Question
As you know, number data type in JavaScript cannot represent (all) float numbers accurately due to binary nature.

For some basic calculations, you might use `Number.prototype.toFixed()` to overcome this, yet for more extreme cases that requires perfect accuracy, it is not enough.

[Proposal of BigDecimal](https://github.com/tc39/proposal-decimal) to JavaScript is still at an early stage, before it is adopted, you can use other libraries like [Big.js](https://github.com/MikeMcl/big.js/).

In this problem, you are asked to **implement the addition of two decimals with arbitrary digits**.

```js

add('-999999999999999999', '-1')
// '-1000000000000000000'

add(
  '-999999999999999999.999999999999999999999999999999', 
  '1.0000000000000000000000000001')
// '-999999999999999998.999999999999999999999999999899'

add(
  '999999999999999999.9999999999999999999999999999', 
  '1.0000000000000000000000000001')
// '1000000000000000001'
```

1.  This problem covers [76\. implement BigInt addition with sign](https://bigfrontend.dev/problem/implement-BigInt-addition-with-sign).
2.  trailing zeroes in the result should be removed.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  // your code here
}
```
:::
    
::::


## Related

+ [BigDecimal subtraction](./bigdecimal-subtraction)
##  Source
[Source From](https://bigfrontend.dev/problem/decimal-addition)

  