---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# implement completeAssign()

## Question
This is a follow-up on [26\. implement Object.assign()](https://bigfrontend.dev/problem/implement-object-assign).

`Object.assign()` assigns the enumerable properties, so getters are not copied, non-enumerable properties are ignored.

Suppose we have following source object.

```js
const source = Object.create(
  {
    a: 3 // prototype
  },
  {
    b: {
      value: 4,
      enumerable: true // enumerable data descriptor
    },
    c: {
      value: 5, // non-enumerable data descriptor
    },
    d: { // non-enumerable accessor descriptor 
      get: function() {
        return this._d;
      },
      set: function(value) {
        this._d = value
      }
    },
    e: { // enumerable accessor descriptor 
      get: function() {
        return this._e;
      },
      set: function(value) {
        this._e = value
      },
      enumerable: true
    }
  }
)
```

If we call `Object.assign()` with source of above, we get:

```js

Object.assign({}, source)

// {b: 4, e: undefined}
// e is undefined because `this._e` is undefined
```

Rather than above result, could you implement a `completeAssign()` which have the same parameters as `Object.assign()` but fully copies the data descriptors and accessor descriptors?

In case you are not familiar with the descriptors, [this page from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) might help.

This problem is solely checking your understanding of how property descriptors work.

Good luck

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
function completeAssign(target, ...sources) {
  // your code here
}
```
:::
    
::::


## Related

+ [implement Object.assign()](./implement-object-assign)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-completeAssign)

  