---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement Array.prototype.reduce()

## Question
[Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) is a handy method to process arrays.

Here is a simple task - **Could you implement it by yourself?**

```ts
[1,2,3].myReduce((sum, item) => sum + item)
// 6
```

1.  do not use native Array.prototype.reduce() in your code
2.  your function is only tested against valid array (no array-like objects)
3.  thanks to [pajadev](https://bigfrontend.dev/category/5/discuss/693?focus=859) for suggesting this

## Code
:::: code-group
::: code-group-item javascript
```javascript
Array.prototype.myReduce = function () {
  // your code here
}
```
:::
    ::: code-group-item typescript:active
```typescript
// copied from lib.es5.d.ts
declare interface Array<T> {
  myReduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
  myReduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  myReduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U
}

Array.prototype.myReduce = function () {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-Array-prototype-reduce)

  