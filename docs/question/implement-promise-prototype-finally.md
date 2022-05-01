---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement Promise.prototype.finally()

[Promise.prototype.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) could be used to run a callback when a promise is settled(either fulfilled or rejected).

Notice that the callback passed `finally()` doesn't receive any argument, meaning it doesn't modify the value in the promise chain (care for rejection).


[Source From](https://bigfrontend.dev/problem/implement-Promise-prototype-finally)

  