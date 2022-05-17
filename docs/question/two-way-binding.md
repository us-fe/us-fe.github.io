---
tag:
  - Coding
  - JavaScript
  - DOM
  - Easy

---
  
# Two-way binding

## Question
Let's do some simple two-way binding.

Please create a function `model(state, element)`, to bind `state.value` to the HTMLInputElement `element`.

```js
const input = document.createElement('input')
const state = { value: 'BFE' }
model(state, input)

console.log(input.value) // 'BFE'
state.value = 'dev'
console.log(input.value) // 'dev'
input.value = 'BFE.dev'
input.dispatchEvent(new Event('change'))
console.log(state.value) // 'BFE.dev'
```

## Code
:::: code-group
::: code-group-item javascript
```javascript
/**
 * @param {{value: string}} state
 * @param {HTMLInputElement} element
 */
function model(state, element) {
  // your code here
}
```
:::
    ::: code-group-item typescript:active
```typescript
function model(state: {value: string}, element: HTMLInputElement) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/two-way-binding)

  