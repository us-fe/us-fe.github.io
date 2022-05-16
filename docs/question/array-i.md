---
tag:
  - Quiz
  - JavaScript

---
  
# Array I

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
const a = [0]
console.log(a.length)
a[3] = 3
console.log(a.length)
for (let item of a) {
  console.log(item)
}
a.map(item => {console.log(item)})
a.forEach(item => {console.log(item)})
console.log(Object.keys(a))
delete a[3]
console.log(a.length)
a[2] = 2
a.length = 1
console.log(a[0],a[1],a[2])
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Array-I)

  