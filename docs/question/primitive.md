---
tag:
  - Quiz
  - JavaScript

---
  
# to primitive

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
// case 1
const obj1 = {
  valueOf() {
    return 1
  },
  toString() {
    return '100'
  }
}

console.log(obj1 + 1)
console.log(parseInt(obj1))

// case 2
const obj2 = {
  [Symbol.toPrimitive]() {
    return 200
  },

  valueOf() {
    return 1
  },
  toString() {
    return '100'
  }
}

console.log(obj2 + 1)
console.log(parseInt(obj2))

// case 3
const obj3 = {
  toString() {
    return '100'
  }
}

console.log(+obj3)
console.log(obj3 + 1)
console.log(parseInt(obj3))

// case 4
const obj4 = {
  valueOf() {
    return 1
  }
}

console.log(obj4 + 1)
console.log(parseInt(obj4))

// case 5
const obj5 = {
  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? '100' : 1
  },
}

console.log(obj5 + 1)
console.log(parseInt(obj5))
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/primitive)

  