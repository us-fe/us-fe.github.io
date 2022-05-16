---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement `Promise.any()`

## Question
> Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfils, returns a single promise that resolves with the value from that promise

*   from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

Can you implement a `any()` to work the same as `Promise.any()`?

_note_

`AggregateError` is not supported in Chrome yet, but you can still use it in your code since we will add the Class into your code. Do something like following:

```js
new AggregateError(
  'No Promise in Promise.any was resolved', 
  errors
)
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  // your code here
}
```
:::
    
::::


## Related

+ [implement `Promise.all()`](./implement-Promise-all)
+ [implement `Promise.allSettled()`](./implement-Promise-allSettled)
+ [implement `Promise.race()`](./implement-Promise-race)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-Promise-any)

  