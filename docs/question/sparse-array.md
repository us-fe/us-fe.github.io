---
tag:
  - Quiz
  - JavaScript

---
  
# sparse array

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
const arr = [1,,,2]

// forEach
arr.forEach(i => console.log(i))

// map
console.log(arr.map(i => i * 2))

// for ... of
for (const i of arr) {
  console.log(i)
}

// spread
console.log([...arr])
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/sparse-array)

  