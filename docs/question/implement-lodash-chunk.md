---
tag:
  - Coding
  - JavaScript
  - Lodash
  - medium

---
  
# implement _.chunk()

[\_.chunk()](https://lodash.com/docs/4.17.15#chunk) splits array into groups with the specific size.

Please implement your `chunk(arr: any[], size: number)`

```js
chunk([1,2,3,4,5], 1)
// [[1], [2], [3], [4], [5]]

chunk([1,2,3,4,5], 2)
// [[1, 2], [3, 4], [5]]

chunk([1,2,3,4,5], 3)
// [[1, 2, 3], [4, 5]]

chunk([1,2,3,4,5], 4)
// [[1, 2, 3, 4], [5]]

chunk([1,2,3,4,5], 5)
// [[1, 2, 3, 4, 5]]
```

for size smaller than 1, return an empty array.


[Source From](https://bigfrontend.dev/problem/implement-lodash-chunk)

  