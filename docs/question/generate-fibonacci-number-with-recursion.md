---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# Generate Fibonacci Number with recursion

In [86\. Generate Fibonacci Number](https://bigfrontend.dev/problem/fibonacci-number) you are asked to create a `fib(n)`.

This could be simply done by a recursion, but it costs so much time that your browser freezes, don't try it with large numbers.

```js
const fib = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}

fib(10) // 55
fib(1000) // timeout
```

Can you improve above implementation to make it work for `fib(1000)` ? recursion should still be used.


[Source From](https://bigfrontend.dev/problem/Generate-Fibonacci-Number-with-recursion)

  