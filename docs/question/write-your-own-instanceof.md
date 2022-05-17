---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# write your own `instanceof`

## Question
Do you know how [instanceOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) works ?

If so, please write you own `myInstanceOf()`.

```js
class A {}
class B extends A {}

const b = new B()
myInstanceOf(b, B) // true
myInstanceOf(b, A) // true
myInstanceOf(b, Object) // true

function C() {}
myInstanceOf(b, C) // false
C.prototype = B.prototype
myInstanceOf(b, C) // true
C.prototype = {}
myInstanceOf(b, C) // false
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */
function myInstanceOf(obj, target) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/write-your-own-instanceof)

  