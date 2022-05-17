---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - Lodash
  - Medium

---
  
# create `_.cloneDeep()`

## Question
`Object.assign()` could be used to do shallow copy, while for recursive deep copy, [\_.cloneDeep](https://lodash.com/docs/4.17.15#cloneDeep) could be very useful.

Can you create your own `_.cloneDeep()`?

The lodash implementation actually covers a lot of data types, for simplicity, your code just need to cover

1.  [primitive types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values) and their wrapper Object
2.  Plain Objects (Object literal) with all enumerable properties
3.  Array

> There is built-in [structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) now, but don't use this to practice

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
function cloneDeep(data) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/create-cloneDeep)

  