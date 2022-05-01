---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# implement Object.is()

[Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) is similar to `===` except following cases

```js
Object.is(0, -0) // false
0 === -0 // true

Object.is(NaN, NaN) // true
NaN === NaN // false
```

Here is the [detailed spec](https://www.ecma-international.org/ecma-262/6.0/#sec-samevalue), can you implement your own `is()`?


[Source From](https://bigfrontend.dev/problem/implement-Object.is)

  