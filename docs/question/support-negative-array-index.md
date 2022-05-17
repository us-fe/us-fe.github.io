---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# support negative Array index in JavaScript

## Question
Python supports negative list index , while JavaScript doesn't.

Can you write a wrapper function to make **negative array index** possible?

```js
const originalArr = [1,2,3]
const arr = wrap(originalArr)

arr[0] // 1
arr[1] // 2
arr[2] // 3
arr[3] // undefined
arr[-1] // 3
arr[-2] // 2
arr[-3] // 1
arr[-4] // undefined
```

All methods on `arr` should be applied to the original array, which means

```js
arr.push(4)
arr[3] // 4
originalArr[3] // 4

arr.shift()
arr[0] // 2
originalArr[0] // 2

arr.bfe = 'bfe'
originalArr.bfe // 'bfe'

arr[-1] = 5
arr // [2,3,5]
originalArr // [2,3,5]

originalArr[2] = 6
arr // [2,3,6]
originalArr // [2,3,6]
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {any[]} arr
 * @returns {?} - sorry no type hint for this
 */
function wrap(arr) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/support-negative-Array-index)

  