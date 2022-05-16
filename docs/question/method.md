---
tag:
  - Quiz
  - JavaScript

---
  
# method

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
// This is a trick question

// case 1
const obj1 = {
  foo() {
    console.log(super.foo())
  }
}

Object.setPrototypeOf(obj1, {
  foo() {
    return 'bar'
  }
})

obj1.foo()

// case 2

const obj2 = {
  foo: function() {
    console.log(super.foo())
  }
}

Object.setPrototypeOf(obj2, {
  foo() {
    return 'bar'
  }
})

obj2.foo()
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/method)

  