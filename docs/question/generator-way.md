---
tag:
  - Quiz
  - JavaScript

---
  
# two-way generator

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
function* gen() {
  yield 2 * (yield 100)
}

const generator = gen()
console.log(generator.next().value)
console.log(generator.next(1).value)
console.log(generator.next(1).value)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/generator-2-way)

  