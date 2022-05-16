---
tag:
  - Quiz
  - JavaScript
  - Promise

---
  
# Promise then callbacks

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
Promise.resolve(1)
.then(() => 2)
.then(3)
.then((value) => value * 3)
.then(Promise.resolve(4))
.then(console.log)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/3-promise-then-callbacks)

  