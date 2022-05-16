---
tag:
  - Quiz
  - JavaScript

---
  
# Prototype

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
function Foo() { }
Foo.prototype.bar = 1
const a = new Foo()
console.log(a.bar)

Foo.prototype.bar = 2
const b = new Foo()
console.log(a.bar)
console.log(b.bar)

Foo.prototype = {bar: 3}
const c = new Foo()
console.log(a.bar)
console.log(b.bar)
console.log(c.bar)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/prototype)

  