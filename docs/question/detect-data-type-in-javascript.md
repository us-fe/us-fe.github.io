---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# Detect data type in JavaScript

## Question
This is an easy problem.

For [all the basic data types](https://javascript.info/types) in JavaScript, how could you write a function to detect the type of arbitrary data?

Besides basic types, you need to also handle also commonly used complex data type including `Array`, `ArrayBuffer`, `Map`, `Set`, `Date` and `Function`

The goal is not to list up all the data types but to show us how to solve the problem when we need to.

The type should be lowercase

```js

detectType(1) // 'number'
detectType(new Map()) // 'map'
detectType([]) // 'array'
detectType(null) // 'null'

// more in judging step
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/detect-data-type-in-JavaScript)

  