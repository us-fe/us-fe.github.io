---
tag:
  - Coding
  - JavaScript
  - Easy

---
  
# implement Array.prototype.flat()

## Question
There is already [Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example to illustrate

```js
const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4]
```

**follow up**

Are you able to solve it both recursively and iteratively?

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
}
```
:::
    ::: code-group-item typescript
```typescript
type Func = (arr: Array<any>, depth?:number) => Array<any>

const flat: Func = function (arr, depth = 1) {
  // your imeplementation here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-Array-prototype.flat)

  