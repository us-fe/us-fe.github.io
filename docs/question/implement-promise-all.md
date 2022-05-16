---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement `Promise.all()`

## Question
> The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises

source - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

Could you write your own `all()` ? which should works the same as `Promise.all()`

_note_

**Do not use Promise.all() directly**, it is not helping

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  // your code here
}
```
:::
    
::::


## Related

+ [implement async helper - `parallel()`](./implement-async-helper-parallel)
+ [implement `Promise.allSettled()`](./implement-Promise-allSettled)
+ [implement `Promise.any()`](./implement-Promise-any)
+ [implement `Promise.race()`](./implement-Promise-race)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-Promise-all)

  