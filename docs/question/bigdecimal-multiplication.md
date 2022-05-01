---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - medium

---
  
# BigDecimal multiplication

> This is a follow-up on [126\. BigDecimal addition](https://bigfrontend.dev/problem/decimal-addition)

In this problem, you are asked to **implement the multiplication of two decimals with arbitrary digits**.

```js

multiply(
  '1123456787654323456789', 
  '1234567887654323456'
)
// '1386983673205309924427166592431045142784'

multiply(
  '-1123456787654323456789', 
  '1234567887654323456.12348'
)
// '-1386983673205309924565891036570601003228.30572'

multiply(
  '-0.12345', 
  '-1.6789012'
)
// '0.20726035314'
```

1.  This problem covers [114\. implement BigInt multiplication](https://bigfrontend.dev/problem/implement-BigInt-multiplication).
2.  trailing zeroes in the result should be removed.
3.  Big.js defaults return exponential notation when it is too big, in this problem, **don't do that**


[Source From](https://bigfrontend.dev/problem/bigdecimal-multiplication)

  