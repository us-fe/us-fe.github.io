---
tag:
  - Quiz
  - JavaScript

---
  
# requestAnimationFrame

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
console.log(1)

setTimeout(() => {
  console.log(2)
}, 100)

requestAnimationFrame(() => {
  console.log(3)
})

requestAnimationFrame(() => {
  console.log(4)
  setTimeout(() => {
    console.log(5)
  }, 10)
})

const end = Date.now() + 200;
while (Date.now() < end) {
}

console.log(6)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/requestanimationframe)

  