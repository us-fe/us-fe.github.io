---
tag:
  - Quiz
  - JavaScript

---
  
# Hoisting V

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
(() => {
  if (!fn) {
    function fn() {
      console.log('2')
    }
  }
  fn()
})()

function fn() {
  console.log('1')
}

// another one
function fn1() {
  console.log('3')
}

(() => {
  if (!fn1) {
    function fn1() {
      console.log('4')
    }
  }
  fn1()
})()


// another one !
(() => {
  if (false) {
    function fn3() {
      console.log('5')
    }
  }
  fn3()
})()
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/hoisting-v)

  