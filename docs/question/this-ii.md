---
tag:
  - Quiz
  - JavaScript

---
  
# `this` II

## Question
What does the code snippet to the right output by `console.log`?

ref: [https://javascript.info/reference-type](https://javascript.info/reference-type)

## Snippet
```js
const obj = {
  a: 1,
  b() {
    return this.a
  }
}
console.log(obj.b())
console.log((true ? obj.b : a)())
console.log((true, obj.b)())
console.log((3, obj['b'])())
console.log((obj.b)())
console.log((obj.c = obj.b)())
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/this-II)

  