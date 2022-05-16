---
tag:
  - Quiz
  - JavaScript

---
  
# non-writable

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
const a = {}
Object.defineProperty(a, 'foo1', {
  value: 1
})
const b = Object.create(a)
b.foo2 = 1

console.log(b.foo1)
console.log(b.foo2)

b.foo1 = 2
b.foo2 = 2


console.log(b.foo1)
console.log(b.foo2)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/inherit-writable-flag)

  