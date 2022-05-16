---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement Immer produce()

## Question
In [12\. implement Immutability helper](/problem/implement-Immutability-helper), we are asked to implement immutability helpers.

These helpers requires extra effort for us to remember how to use them, while [Immer](https://immerjs.github.io/immer/produce) takes another approach which might be easier to use.

For example, we have a base state as below.

```js
const state = [
  {
    name: 'BFE',
  },
  {
    name: '.',
  }
]
```

We can use `produce()` to patch our modification and get a new state.

```js
const newState = produce(state, draft => {
  draft.push({name: 'dev'})
  draft[0].name = 'bigfrontend'
  draft[1].name = '.' // set with the same value
})
```

Unchanged parts are not cloned.

```js
expect(newState).not.toBe(state);
expect(newState).toEqual(
  [
    {
      name: 'bigfrontend',
    },
    {
      name: '.',
    },
    {
      name: 'dev'
    }
  ]
);
expect(newState[0]).not.toBe(state[0])
expect(newState[1]).toBe(state[1])
expect(newState[2]).not.toBe(state[2])
```

**Please implement your produce()**.

1.  This is not to recreate Immer, test cases only cover the basic usage.
2.  You only need to support basic usage on plain object and array, things like Map/Set, Auto freezing .etc are out of scope.
3.  You need to make sure unchanged parts are not cloned.

## Code
:::: code-group
::: code-group-item javascript
```javascript
/**
 * @param {any} base
 * @param {(draft: any) => any} recipe
 * @returns {any}
 */
function produce(base, recipe) {
  // your code here
}
```
:::
    ::: code-group-item typescript:active
```typescript
type ProduceFunc = <T>(base: T, receipe: (draft: T) => any) => void

const produce: ProduceFunc = (base, recipe) => {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/immerjs)

  