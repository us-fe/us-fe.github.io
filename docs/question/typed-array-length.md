---
tag:
  - Quiz
  - JavaScript

---
  
# Typed Array length

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
class MyArray extends Uint8Array {
  get length() {
    return 3
  }
}

const arr1 = new MyArray(10)
console.log(arr1.length)

const arr2 = new Uint8Array(10)
console.log(arr2.length)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Typed-Array-length)

  