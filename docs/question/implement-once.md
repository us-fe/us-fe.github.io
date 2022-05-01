---
tag:
  - Coding
  - JavaScript
  - Lodash
  - easy

---
  
# implement `_.once()`

[\_.once(func)](https://lodash.com/docs/4.17.15#once) is used to force a function to be called only once, later calls only returns the result of first call.

Can you implement your own `once()`?

```js
function func(num) {
  return num
}

const onced = once(func)

onced(1) 
// 1, func called with 1

onced(2)
// 1, even 2 is passed, previous result is returned 
```


[Source From](https://bigfrontend.dev/problem/implement-once)

  