---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement Array.prototype.map()

## Question
Please implement your own [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

```js
[1,2,3].myMap(num => num * 2)
// [2,4,6]
```

> please avoid using Array.prototype.map() directly in your code.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
Array.prototype.myMap = function() {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
// copied from lib.es5.d.ts
declare interface Array<T> {
  myMap<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}


Array.prototype.myMap = function() {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-Array-prototype-map)

  