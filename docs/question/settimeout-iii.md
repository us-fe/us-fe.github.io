---
tag:
  - Quiz
  - JavaScript

---
  
# setTimeout III

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
let func = () => {
  console.log(1)
}
setTimeout(() => {
  func = () => {
    console.log(2)
  }
}, 0)

setTimeout(func, 100)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/setTimeout-III)

  