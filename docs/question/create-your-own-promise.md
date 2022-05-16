---
tag:
  - Coding
  - JavaScript
  - Airbnb
  - medium

---
  
# create your own Promise

## Question
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is widely used nowadays, hard to think how we handled [Callback Hell](http://callbackhell.com) in the old times.

Can you implement a `MyPromise` Class by yourself?

At least it should match following requirements

1.  new promise: `new MyPromise((resolve, reject) => {})`
2.  chaining : `MyPromise.prototype.then()` _[then handlers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) should be called asynchronously_
3.  rejection handler: `MyPromise.prototype.catch()`
4.  static methods: `MyPromise.resolve()`, `MyPromise.reject()`.

This is a challenging problem. Recommend you read about Promise thoroughly first.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
class MyPromise {
  constructor(executor) {
    // your code here
  }
  
  then(onFulfilled, onRejected) {
    // your code here
  }
  
  catch(onRejected) {
    // your code here
  }
  
  static resolve(value) {
    // your code here
  }
  
  static reject(value) {
    // your code here
  }
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/create-your-own-Promise)

  