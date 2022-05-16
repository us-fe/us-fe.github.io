---
tag:
  - Quiz
  - JavaScript

---
  
# try...catch

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
var a = 'a'
try {
  throw new Error('BFE.dev')
} catch {
  var a = 'a1'
}
console.log(a)

var b = 'b'
try {
  throw new Error('BFE.dev')
} catch (b) {
  var b = 'b1'
}
console.log(b)

var c = 'c'
try {
  throw new Error('BFE.dev')
} catch (error) {
  var c = 'c1'
}
console.log(c)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/try-catch)

  