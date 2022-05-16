---
tag:
  - Quiz
  - JavaScript
  - Promise

---
  
# Promise executor

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
new Promise((resolve, reject) => {
  resolve(1)
  resolve(2)
  reject('error')
}).then((value) => {
  console.log(value)
}, (error) => {
  console.log('error')
})
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/2-promise-executor)

  