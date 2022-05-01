---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - few challengers

---
  
# BigDecimal Division

> This is a follow-up on [126\. BigDecimal addition](https://bigfrontend.dev/problem/decimal-addition)

In this problem, you are asked to **implement the division of two decimals with arbitrary digits**.

```js
divide(
  '100000000000000.1', 
  '-0.001'
)
// '-100000000000000100'

divide(
  '-0.123', 
  '-0.00971'
)
// '12.66735324407826982492'
```

1.  This problem covers [115\. implement BigInt division](https://bigfrontend.dev/problem/implement-BigInt-division).
2.  trailing zeroes in the result should be removed.
3.  return the result with **max 20 digit fraction part**, rest be truncated.


[Source From](https://bigfrontend.dev/problem/bigdecimal-division)

  