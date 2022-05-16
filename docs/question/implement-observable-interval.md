---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# implement Observable interval()

## Question
This is a follow-up on [57\. create an Observable](https://bigfrontend.dev/problem/create-an-Observable).

Suppose you have solved [57\. create an Observable](https://bigfrontend.dev/problem/create-an-Observable), here you are asked to implement a creation operator `interval()`.

From the [document](https://rxjs-dev.firebaseapp.com/api/index/function/interval), `interval()`

> Creates an Observable that emits sequential numbers every specified interval of time

```js
interval(1000).subscribe(console.log);
```

Above code prints 0, 1, 2 .... with an interval of 1 seconds.

**Note** Observable is already given for you, no need to create it.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {number} period
 * @return {Observable}
 */
function interval(period) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-Observable-interval)

  