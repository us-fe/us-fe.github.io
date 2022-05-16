---
tag:
  - Quiz
  - JavaScript

---
  
# postMessage

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
console.log(1)

window.onmessage = () => {
  console.log(2)
}

Promise.resolve().then(() => {
  console.log(3)
})

setTimeout(() => {
  console.log(4)
}, 0)

console.log(5)

window.postMessage('')

console.log(6)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/postMessage)

  