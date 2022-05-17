---
tag:
  - Coding
  - JavaScript
  - Easy

---
  
# implement your own `Object.create`

## Question
You can use [Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) to create a new object.

Can you write your own `myObjectCreate()` to do the same(well for the basic usage) ?

**Note**

1.  you don't need to support `propertiesObject` \- 2nd parameter of Object.create
2.  throw an Error if non-object is passed in. ([why](https://stackoverflow.com/questions/18198178/null-prototype-object-prototype-and-object-create)?)
3.  `Object.create()` and `Object.setPrototypeOf()` should not be used.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-your-own-Object-create)

  