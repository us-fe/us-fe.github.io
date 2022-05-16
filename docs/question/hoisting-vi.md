---
tag:
  - Quiz
  - JavaScript

---
  
# Hoisting VI

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
var foo = 1;
(function () {
  console.log(foo);
  foo = 2;
  console.log(window.foo);
  console.log(foo);
  var foo = 3;
  console.log(foo);
  console.log(window.foo)
})()
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Hoisting-VI)

  