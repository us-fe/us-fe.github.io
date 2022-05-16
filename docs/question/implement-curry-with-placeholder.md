---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement curry() with placeholder support

## Question
This is a follow-up on [1\. implement curry()](/problem/implement-curry)

please implement `curry()` which also supports placeholder.

Here is an example

```js
const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(_, 2)(1, 3) // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
```

more to read

[https://javascript.info/currying-partials](https://javascript.info/currying-partials)

[https://lodash.com/docs/4.17.15#curry](https://lodash.com/docs/4.17.15#curry)

[https://github.com/planttheidea/curriable](https://github.com/planttheidea/curriable)

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
}


curry.placeholder = Symbol()
```
:::
    ::: code-group-item typescript
```typescript
interface Curry {
  (fn: (...args: any[]) => any) : (...args: any[]) => any,
  placeholder: Symbol
}

const curry: Curry = (fn) => {
  // your code here
}


curry.placeholder = Symbol()
```
:::
    
::::


## Related

+ [implement curry()](./implement-curry)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-curry-with-placeholder)

  