---
tag:
  - Quiz
  - JavaScript

---
  
# reference type

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
const obj = {
  msg: 'BFE',
  foo() {
    console.log(this.msg)
  },
  bar() {
    console.log('dev')
  }
}

obj.foo();
(obj.foo)();
(obj.foo || obj.bar)();
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/reference-type)

  