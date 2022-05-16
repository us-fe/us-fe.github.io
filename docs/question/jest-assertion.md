---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# toBe() or not.toBe()

## Question
Here are some simple [Jest](https://jestjs.io/docs/expect#expectvalue) test code.

```js
expect(3).toBe(3) // ✅
expect(4).toBe(3) // ❌
```

We can reverse it with `not`.

```js
expect(3).not.toBe(3) // ❌
expect(4).not.toBe(3) // ✅
```

Please implement `myExpect()` to support `toBe()` and also `not`.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(input) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
interface Matcher {
  toBe(data: any): void
}

function myExpect(input: any): Matcher & {not: Matcher} {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/jest-assertion)

  