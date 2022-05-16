---
tag:
  - Quiz
  - JavaScript

---
  
# `this` III

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
const obj = {
  a: 1,
  b: this.a + 1,
  c: () => this.a + 1,
  d() {
    return this.a + 1
  },
  e() {
    return (() => this.a + 1)()
  }
}
console.log(obj.b)
console.log(obj.c())
console.log(obj.d())
console.log(obj.e())
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/this-III)

  