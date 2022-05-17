---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# implement `Promise.allSettled()`

## Question
> The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

*   from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

Different from `Promise.all()` which rejects right away once an error occurs, `Promise.allSettled()` waits for all promises to settle.

Now can you implement your own `allSettled()` ?

_note_

**Do not use Promise.allSettled() directly**, it helps nothing.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  // your code here
}
```
:::
    
::::


## Related

+ [implement async helper - `parallel()`](./implement-async-helper-parallel)
+ [implement `Promise.all()`](./implement-Promise-all)
+ [implement `Promise.any()`](./implement-Promise-any)
+ [implement `Promise.race()`](./implement-Promise-race)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-Promise-allSettled)

  