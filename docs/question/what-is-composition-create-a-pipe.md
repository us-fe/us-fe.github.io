---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# what is Composition? create a pipe()

## Question
what is Composition? It is actually not that difficult to understand, see [@dan\_abramov 's explanation](https://whatthefuck.is/composition).

Here you are asked to create a `pipe()` function, which chains multiple functions together to create a new function.

Suppose we have some simple functions like this

```js
const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y
```

Your `pipe()` would be used to generate new functions

```js

pipe([
  times(2),
  times(3)
])  
// x * 2 * 3

pipe([
  times(2),
  plus(3),
  times(4)
]) 
// (x * 2 + 3) * 4

pipe([
  times(2),
  subtract(3),
  divide(4)
]) 
// (x * 2 - 3) / 4
```

**notes**

1.  to make things simple, functions passed to `pipe()` will all accept 1 argument

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	// your code here
}
```
:::
    ::: code-group-item typescript
```typescript
type Func = (arg: any) => any

function pipe(funcs: Array<Func>): Func {
	// your code here
}
```
:::
    
::::


## Related

+ [implement async helper - `sequence()`](./implement-async-helper-sequence)
##  Source
[Source From](https://bigfrontend.dev/problem/what-is-composition-create-a-pipe)

  