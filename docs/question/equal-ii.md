---
tag:
  - Quiz
  - JavaScript

---
  
# Equal II

## Question
What does the code snippet to the right output by `console.log`?

ref to the [The Abstract Equality Comparison Algorithm](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)

## Snippet
```js
console.log([1] == 1)
console.log([1] == '1')
console.log(['1'] == '1')
console.log(['1'] == 1)
console.log([1] == ['1'])
console.log(new Boolean(true) == 1)
console.log(new Boolean(true) == new Boolean(true))
console.log(Boolean(true) == '1')
console.log(Boolean(false) == [0])
console.log(new Boolean(true) == '1')
console.log(new Boolean(false) == [0])
console.log(null == undefined)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Equal-II)

  