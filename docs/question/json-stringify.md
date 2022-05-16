---
tag:
  - Quiz
  - JavaScript

---
  
# JSON.stringify()

## Question
What does the code snippet to the right output by `console.log`?

> Please refer to the format guide for cases like quotes in quotes

## Snippet
```js
// attention that for console.log('"a"'), you should enter ""a""
// please refer to format guide

console.log(JSON.stringify(['false', false]))
console.log(JSON.stringify([NaN, null, Infinity, undefined]))
console.log(JSON.stringify({a: null, b: NaN, c: undefined}))
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/json-stringify)

  