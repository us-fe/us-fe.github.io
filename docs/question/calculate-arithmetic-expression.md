---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - medium

---
  
# calculate arithmetic expression

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


[Source From](https://bigfrontend.dev/problem/calculate-arithmetic-expression)

  