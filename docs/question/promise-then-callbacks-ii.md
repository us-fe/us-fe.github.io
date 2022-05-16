---
tag:
  - Quiz
  - JavaScript
  - Promise

---
  
# Promise then callbacks II

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
Promise.resolve(1)
.then((val) => {
  console.log(val)
  return val + 1
}).then((val) => {
  console.log(val)
}).then((val) => {
  console.log(val)
  return Promise.resolve(3)
    .then((val) => {
      console.log(val)
    })
}).then((val) => {
  console.log(val)
  return Promise.reject(4)
}).catch((val) => {
  console.log(val)
}).finally((val) => {
  console.log(val)
  return 10
}).then((val) => {
  console.log(val)
})
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/4-Promise-then-callbacks-II)

  