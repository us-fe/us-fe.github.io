---
tag:
  - Quiz
  - JavaScript

---
  
# Promise.all()

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
(async () => {
  await Promise.all([]).then((value) => {
    console.log(value)
  }, (error) => {
    console.log(error)
  })
  
  await Promise.all([1,2,Promise.resolve(3), Promise.resolve(4)]).then((value) => {
    console.log(value)
  }, (error) => {
    console.log(error)
  })
  
  await Promise.all([1,2,Promise.resolve(3), Promise.reject('error')]).then((value) => {
    console.log(value)
  }, (error) => {
    console.log(error)
  })
})()
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Promise-all)

  