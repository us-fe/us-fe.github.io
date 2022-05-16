---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# implement `Promise.race()`

## Question
This problem is similar to [31\. implement async helper - `race()`](https://bigfrontend.dev/problem/implement-async-helper-race), but with Promise.

> The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise. [source: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

Can you create a `race()` which works the same as `Promise.race()`?

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  // your code here
}
```
:::
    
::::


## Related

+ [implement `Promise.all()`](./implement-Promise-all)
+ [implement `Promise.allSettled()`](./implement-Promise-allSettled)
+ [implement `Promise.any()`](./implement-Promise-any)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-Promise-race)

  