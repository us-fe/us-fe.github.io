---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - easy

---
  
# validate string of parentheses

Given a string containing only following characters:

1.  parentheses : `(` or `)`
2.  brackets: `[` or `]`
3.  braces: `{` or `}`

write a function to **determine if they are valid**.

By 'valid', it means all should be rightly paired, and with the valid order.

```js

validate('{}[]()') 
// true

validate('{[()]}') 
// true

validate('{[}]') 
// false, they are not in the right order

validate('{}}') 
// false, last `}` is not paired with `{`
```

**Follow-up**

What is time & space complexity of your approach ? Can you do it better?


[Source From](https://bigfrontend.dev/problem/validate-parenthesis)

  