---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# toBe() or not.toBe()

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


[Source From](https://bigfrontend.dev/problem/jest-assertion)

  