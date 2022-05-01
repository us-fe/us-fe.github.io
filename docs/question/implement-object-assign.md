---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement Object.assign()

_The `Object.assign()` method copies all enumerable own properties from one or more source objects to a target object. It returns the target object._ (source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign))

It is widely used, Object Spread operator actually is internally the same as `Object.assign()` ([source](https://github.com/tc39/proposal-object-rest-spread/blob/master/Spread.md)). Following 2 lines of code are totally the same.

```js
let aClone = { ...a };
let aClone = Object.assign({}, a);
```

This is an easy one, could you implement `Object.assign()` with your own implementation ?

_note_

**Don't use Object.assign() in your code** It doesn't help improve your skills


[Source From](https://bigfrontend.dev/problem/implement-object-assign)

  