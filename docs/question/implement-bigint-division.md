---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement BigInt division

This is a follow-up on [114\. implement BigInt multiplication](https://bigfrontend.dev/problem/implement-BigInt-multiplication).

You are asked to create a BigInt division function.

```js
divide(
  '1123456787654323456789', 
  '1234567887654323456'
)
// '910'

divide(
  '-1123456787654323456789', 
  '1234567887654323456'
)
// '-910'
```

Notice the result should be **rounded towards 0**.

```js
divide(
  '5', 
  '2'
)
// '2'

divide(
  '-3', 
  '2'
)
// '-1'
```


[Source From](https://bigfrontend.dev/problem/implement-BigInt-division)

  