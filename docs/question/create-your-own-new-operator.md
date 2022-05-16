---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# create your own `new` operator

## Question
[`new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) is used to create new instance objects.

Do you know exactly what `new` does?

You are asked to implement `myNew()`, which should return an object just as what `new` does but without using `new`.

Pay attention to the return type of constructor.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/create-your-own-new-operator)

  