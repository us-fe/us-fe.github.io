---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# implement async helper - `sequence()`

## Question
This problem is similar to [11\. what is Composition? create a pipe()](https://bigfrontend.dev/problem/what-is-composition-create-a-pipe).

You are asked to implement an async function helper, `sequence()` which chains up async functions, like what `pipe()` does.

All async functions have following interface

```ts
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void
```

Your `sequence()` should **accept AsyncFunc array**, and **chain them up by passing new data to the next AsyncFunc through data in Callback.**

Suppose we have an async func which just multiple a number by 2

```js
const asyncTimes2 = (callback, num) => {
   setTimeout(() => callback(null, num * 2), 100)
}
```

Your `sequence()` should be able to accomplish this

```js
const asyncTimes4 = sequence(
  [
    asyncTimes2,
    asyncTimes2
  ]
)

asyncTimes4((error, data) => {
   console.log(data) // 4
}, 1)
```

Once an error occurs, it should trigger the last callback without triggering the uncalled functions.

**Follow up**

Can you solve it with and without Promise?

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs){
  // your code here
}
```
:::
    
::::


## Related

+ [what is Composition? create a pipe()](./what-is-composition-create-a-pipe)
+ [implement async helper - `parallel()`](./implement-async-helper-parallel)
+ [implement async helper - `race()`](./implement-async-helper-race)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-async-helper-sequence)

  