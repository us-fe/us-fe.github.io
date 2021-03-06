---
tag:
  - Coding
  - JavaScript
  - Easy

---
  
# flatten Thunk

## Question
Suppose we have a Callback type

```ts
type Callback = 
  (error: Error, result: any | Thunk) => void
```

A Thunk is a function that take a Callback as parameter

```ts
type Thunk = (callback: Callback) => void
```

Like following three thunks

```js
const func1 = (cb) => {
  setTimeout(() => cb(null, 'ok'), 10)
}

const func2 = (cb) => {
  setTimeout(() => cb(null, func1), 10)
}

const func3 = (cb) => {
  setTimeout(() => cb(null, func2), 10)
}
```

in above example, three functions are kind of chained up, func3 → func2 → func1, but it don't work without some glue.

OK, now you are asked to implement a `flattenThunk()` which glue them up and returns a new thunk.

```js
flattenThunk(func3)((error, data) => {
   console.log(data) // 'ok'
})
```

_note_

Once error occurs, the rest uncalled functions should be skipped

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/flatten-Thunk)

  