---
tag:
  - Quiz
  - JavaScript

---
  
# `this` IV

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
var bar = 1

function foo() {
  return this.bar++
}

const a = {
  bar: 10,
  foo1: foo,
  foo2: function() {
    return foo()
  },
} 


console.log(a.foo1.call())
console.log(a.foo1())
console.log(a.foo2.call())
console.log(a.foo2())
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/this-4)

  