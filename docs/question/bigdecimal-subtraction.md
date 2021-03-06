---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - Few challengers

---
  
# BigDecimal subtraction

## Question
> This is a follow-up on [126\. BigDecimal addition](https://bigfrontend.dev/problem/decimal-addition)

In this problem, you are asked to **implement the subtraction of two decimals with arbitrary digits**.

```js

subtract('-999999999999999999', '-1')
// '-999999999999999998'

subtract(
  '-999999999999999999.999999999999999999999999999999', 
  '1.0000000000000000000000000001')
// '-1000000000000000001.000000000000000000000000000099'

subtract(
  '999999999999999999.999999999999999999999999999999', 
  '-1.000000000000000000000000000001')
// '1000000000000000001'
```

1.  This problem covers [77\. implement BigInt subtraction with sign](https://bigfrontend.dev/problem/implement-BigInt-subtraction-with-sign).
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
function subtract(num1, num2) {
  // your code here
}
```
:::
    
::::


## Related

+ [BigDecimal addition](./decimal-addition)
##  Source
[Source From](https://bigfrontend.dev/problem/bigdecimal-subtraction)

  