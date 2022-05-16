---
tag:
  - Quiz
  - JavaScript

---
  
# Addition vs Unary Plus

## Question
What does the code snippet to the right output by `console.log`?

There is a difference between [Addition Operator(+)](https://tc39.es/ecma262/#sec-addition-operator-plus) and [Unary plus operator(+)](https://tc39.es/ecma262/#sec-unary-plus-operator), even though they use the same '+'.

## Snippet
```js
console.log(1 + 2)
console.log(1 + + 2)
console.log(1 + + + 2)
console.log(1 + '2')
console.log(1 + + '2')
console.log('1' + 2)
console.log('1' + + 2)
console.log(1 + true)
console.log(1 + + true)
console.log('1' + true)
console.log('1' + + true)
console.log(1 + null)
console.log(1 + + null)
console.log('1' + null)
console.log('1' + + null)
console.log(1 + undefined)
console.log(1 + + undefined)
console.log('1' + undefined)
console.log('1' + + undefined)
console.log('1' + + + undefined)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Addition-vs-Unary-Plus)

  