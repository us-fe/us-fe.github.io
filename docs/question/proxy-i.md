---
tag:
  - Quiz
  - JavaScript

---
  
# Proxy I

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
const obj = new Map()
const map = new Map()
obj.foo = 1
map.set('foo', 2)
console.log(obj.foo)
console.log(map.get('foo'))

const proxyObj = new Proxy(obj, {})
const proxyMap = new Proxy(map, {})
console.log(proxyObj.foo)
console.log(proxyMap.get('foo'))
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/proxy-i)

  