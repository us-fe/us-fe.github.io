---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# can you shuffle() an array?

How would you implement a shuffle() ?

When passed with an array, it should modify the array inline to generate a randomly picked permutation at the same probability.

for an array like this:

```js
const arr = [1, 2, 3, 4]
```

there would be possibly 4! = 24 permutations

```js
[1, 2, 3, 4]
[1, 2, 4, 3]
[1, 3, 2, 4]
[1, 3, 4, 2]
[1, 4, 2, 3]
[1, 4, 3, 2]
[2, 1, 3, 4]
[2, 1, 4, 3]
[2, 3, 1, 4]
[2, 3, 4, 1]
[2, 4, 1, 3]
[2, 4, 3, 1]
[3, 1, 2, 4]
[3, 1, 4, 2]
[3, 2, 1, 4]
[3, 2, 4, 1]
[3, 4, 1, 2]
[3, 4, 2, 1]
[4, 1, 2, 3]
[4, 1, 3, 2]
[4, 2, 1, 3]
[4, 2, 3, 1]
[4, 3, 1, 2]
[4, 3, 2, 1]
```

your `shuffle()` should transform the array in one of the above array, at the same 1/24 probability.

_notes_

Your `shuffle()` will be called multiple times, to calculate the probability on each possible result, and test again [standard deviation](https://simple.wikipedia.org/wiki/Standard_deviation)

ref: [https://javascript.info/task/shuffle](https://javascript.info/task/shuffle)


[Source From](https://bigfrontend.dev/problem/can-you-shuffle-an-array)

  