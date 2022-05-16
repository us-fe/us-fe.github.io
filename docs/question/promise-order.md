---
tag:
  - Quiz
  - JavaScript
  - Promise

---
  
# Promise order

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
console.log(1)
const promise = new Promise((resolve) => {
  console.log(2)
  resolve()
  console.log(3)
})

console.log(4)

promise.then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})

console.log(7)

setTimeout(() => {
  console.log(8)
}, 10)

setTimeout(() => {
  console.log(9)
}, 0)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/1-promise-order)

  