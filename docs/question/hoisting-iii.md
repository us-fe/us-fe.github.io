---
tag:
  - Quiz
  - JavaScript

---
  
# Hoisting III

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
var a = 1

function func() {
  a = 2
  console.log(a)
  var a
}

func()

console.log(a)

if (!('b' in window)) {
  var b = 1
}

console.log(b)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Hoisting-III)

  