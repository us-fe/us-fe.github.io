---
tag:
  - Quiz
  - JavaScript

---
  
# comma

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
var obj = {
  a: "BFE",
  b: "dev",
  func: (function foo(){ return this.a; }, function bar(){ return this.b; })
}

console.log(obj.func())
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/comma)

  