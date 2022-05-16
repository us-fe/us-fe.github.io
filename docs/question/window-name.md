---
tag:
  - Quiz
  - JavaScript

---
  
# window name

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
var a = 1;
(function() {
  console.log(a + this.a);
  var a = '2'
  console.log(a + this.a);
})();

var name = 1;
(function() {
  console.log(name + this.name);
  var name = '2'
  console.log(name + this.name);
})();
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/window-name)

  