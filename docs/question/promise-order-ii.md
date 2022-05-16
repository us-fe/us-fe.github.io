---
tag:
  - Quiz
  - JavaScript

---
  
# Promise Order II

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
console.log(1)

setTimeout(() => {
  console.log(2)
}, 10)

setTimeout(() => {
  console.log(3)
}, 0);

new Promise((_, reject) => {
  console.log(4)
  reject(5)
  console.log(6)
}).then(() => console.log(7))
.catch(() => console.log(8))
.then(() => console.log(9))
.catch(() => console.log(10))
.then(() => console.log(11))
.then(console.log)
.finally(() => console.log(12))

console.log(13)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/promise-order-II)

  