---
tag:
  - Quiz
  - JavaScript

---
  
# Promise.prototype.finally()

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
Promise.resolve(1)
.finally((data) => {
  console.log(data)
  return Promise.reject('error')
})
.catch((error) => {
  console.log(error)
  throw 'error2'
})
.finally((data) => {
  console.log(data)
  return Promise.resolve(2).then(console.log)
})
.then(console.log)
.catch(console.log)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Promise-prototype-finally)

  