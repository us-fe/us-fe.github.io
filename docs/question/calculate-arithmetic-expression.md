---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - Medium

---
  
# calculate arithmetic expression

## Question
In [119\. create a tokenizer](https://bigfrontend.dev/problem/create-a-tokenizer), you are able to extract the tokens from a string with invalid spaces.

Now please `calculate()` the result of the string. You can use the tokenizer you wrote before.

```js

calculate('1 * (20 -   300      ) ')
// -280

calculate('     1/0 ')
// Infinity
```

1.  the input expression is syntactically valid, containing non-negative integers, `+`, `-`, `*`, `/`, `(`, `)` and spaces
2.  Don't use `eval()`

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {string} str
 * @returns {Number}
 */
function calculate(str) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/calculate-arithmetic-expression)

  