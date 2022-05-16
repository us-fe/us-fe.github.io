---
tag:
  - Quiz
  - JavaScript

---
  
# Hoisting II

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
const func1 = () => console.log(1)

func1()

func2()

function func2() {
  console.log(2)
}


func3()

var func3 = function func4() {
  console.log(3)
}
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Hoisting-II)

  