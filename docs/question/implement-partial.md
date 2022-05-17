---
tag:
  - Coding
  - JavaScript
  - Lodash
  - Medium

---
  
# implement _.partial()

## Question
[\_.partial()](https://lodash.com/docs/4.17.15#partial) works like [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) but `this` is not bound.

please create your own `partial()`

```ts
const func = (...args) => args

const func123 = partial(func, 1,2,3)

func123(4)
// [1,2,3,4]
```

It should also support placeholder.

```ts
const _ = partial.placeholder
const func1_3 = partial(func, 1, _, 3)

func1_3(2,4)
// [1,2,3,4]
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {Function} func
 * @param {any[]} args
 * @returns {Function}
 */
function partial(func, ...args) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-partial)

  