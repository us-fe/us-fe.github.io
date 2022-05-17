---
tag:
  - Coding
  - JavaScript
  - Easy

---
  
# implement clearAllTimeout()

## Question
`window.setTimeout()` could be used to schedule some task in the future.

Could you implement `clearAllTimeout()` to clear all the timers ? This might be useful when we want to clear things up before page transition.

For example

```js

setTimeout(func1, 10000)
setTimeout(func2, 10000)
setTimeout(func3, 10000)

// all 3 functions are scheduled 10 seconds later
clearAllTimeout()

// all scheduled tasks are cancelled.
```

_note_

You need to keep the interface of `window.setTimeout` and `window.clearTimeout` the same, but you could replace them with new logic

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-clearAllTimeout)

  