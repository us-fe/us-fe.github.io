---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# implement `jest.spyOn()`

## Question
If you did unit test before, you must be familiar with `Spy`.

You are asked to create a `spyOn(object, methodName)`, which works the same as [jest.spyOn()](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname).

To make it simple, here are the 2 requirements of `spyOn`

1.  original method should be called when spied one is called
2.  spy should have a `calls` array, which holds all the arguments in each call.

Code to explain everything.

```ts
const obj = {
   data: 1, 
   increment(num) {
      this.data += num
   }
}

const spy = spyOn(obj, 'increment')

obj.increment(1)

console.log(obj.data) // 2

obj.increment(2)

console.log(obj.data) // 4

console.log(spy.calls)
// [ [1], [2] ]
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-spyOn)

  