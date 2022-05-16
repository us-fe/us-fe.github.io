---
tag:
  - Quiz
  - JavaScript

---
  
# Hoisting IV

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
let foo = 10
function func1() {
    console.log(foo)
    var foo = 1
}
func1 ()


function func2() {
    console.log(foo)
    let foo = 1
}
func2 ()
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Hoisting-IV)

  