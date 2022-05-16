---
tag:
  - Quiz
  - JavaScript

---
  
# Function call

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
function a() {
  console.log(1)
  return {
    a: function() {
      console.log(2)
      return a()
    }
  }
}

a().a()
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Function-call)

  