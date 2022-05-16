---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# create LazyMan()

## Question
`LazyMan` is very lazy, he only eats and sleeps.

`LazyMan(name: string, logFn: (log: string) => void)` would output a message, the passed `logFn` is used.

```js
LazyMan('Jack', console.log)
// Hi, I'm Jack.
```

He can `eat(food: string)`

```js
LazyMan('Jack', console.log).eat('banana').eat('apple')
// Hi, I'm Jack.
// Eat banana.
// Eat Apple.
```

He also `sleep(time: number)`, time is based on seconds.

```js
LazyMan('Jack', console.log).eat('banana').sleep(10).eat('apple').sleep(1)
// Hi, I'm Jack.
// Eat banana.
// (after 10 seconds)
// Wake up after 10 seconds.
// Eat Apple.
// (after 1 second)
// Wake up after 1 second.
```

He can `sleepFirst(time: number)`, which has the highest priority among all tasks, no matter what the order is.

```js
LazyMan('Jack', console.log).eat('banana').sleepFirst(10).eat('apple').sleep(1)
// (after 10 seconds)
// Wake up after 10 seconds.
// Hi, I'm Jack.
// Eat banana
// Eat apple
// (after 1 second)
// Wake up after 1 second.
```

Please create such `LazyMan()`

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
function LazyMan(name, logFn) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/create-lazyman)

  