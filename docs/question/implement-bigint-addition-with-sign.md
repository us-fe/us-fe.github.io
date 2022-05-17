---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# implement BigInt addition with sign

## Question
This is a follow-up on [62\. implement BigInt addition](https://bigfrontend.dev/problem/add-BigInt-string).

You are asked to implement a string addition function, **with possible negative integers**. Also, '+' plus sign should also be supported

```js
add('-999999999999999999', '-1')
// '-1000000000000000000'

add('-999999999999999999', '+1')
// '-999999999999999998'
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
function add(num1, num2) {
  // your code here
}
```
:::
    
::::


## Related

+ [implement BigInt addition](./add-BigInt-string)
+ [implement BigInt subtraction](./implement-BigInt-subtraction)
+ [implement BigInt subtraction with sign](./implement-BigInt-subtraction-with-sign)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-BigInt-addition-with-sign)

  