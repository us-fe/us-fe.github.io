---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# create a counter object

## Question
Create an object with property `count`, which increments every time `count` is accessed, initial value is 0.

```js
const counter = createCounter()
counter.count // 0, then it should increment
counter.count // 1
counter.count // 2
counter.count = 100 // it cannot be altered
counter.count // 3
```

## Code
:::: code-group
::: code-group-item javascript
```javascript
/**
 * @returns { {count: number}}
 */
function createCounter() {
  // your code here
}
```
:::
    ::: code-group-item typescript:active
```typescript
function createCounter(): {count: number } {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/create-a-counter-object)

  