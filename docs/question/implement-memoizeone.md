---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement memoizeOne()

In problem [14\. Implement a general memoization function](https://bigfrontend.dev/problem/implement-general-memoization-function), you are asked to implement a memo function without space concern.

But in reality, it could be a problem if cache bloats.

You might need to restrict the cache capacity, just like [memoize-one](https://github.com/alexreardon/memoize-one) , it only remembers the latest arguments and result.

Please implement your own `memoizeOne()`, it takes 2 arguments

1.  target function
2.  (optional) a equality check function to compare current and last arguments

Default equality check function should be a shallow comparison on array items with strict equal `===`.


[Source From](https://bigfrontend.dev/problem/implement-memoizeOne)

  