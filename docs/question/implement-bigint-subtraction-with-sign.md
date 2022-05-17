---
tag:
  - Coding
  - JavaScript
  - Easy

---
  
# implement BigInt subtraction with sign

## Question
This is a follow-up on [75\. implement BigInt subtraction](https://bigfrontend.dev/problem/implement-BigInt-subtraction).

You are asked to implement a string substraction function, **with possible negative integers**. Also, '+' plus sign should also be supported

```js
substract('-999999999999999999', '-1')
// '-999999999999999998'

substract('-999999999999999999', '+1')
// '-1000000000000000000'
```

Don't use BigInt directly, it is not our goal here.

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
+ [implement BigInt subtraction](./implement-BigInt-subtraction)
+ [implement BigInt addition with sign](./implement-BigInt-addition-with-sign)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-BigInt-subtraction-with-sign)

  