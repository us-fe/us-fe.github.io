---
tag:
  - Coding
  - JavaScript
  - Lodash
  - Medium

---
  
# implement throttle() with leading & trailing option

## Question
This is a follow up on [4\. implement basic throttle()](/problem/implement-basic-throttle), please refer to it for detailed explanation.

In this problem, you are asked to implement a enhanced `throttle()` which accepts third parameter, `option: {leading: boolean, trailing: boolean}`

1.  leading: whether to invoke right away
2.  trailing: whether to invoke after the delay.

[4\. implement basic throttle()](/problem/implement-basic-throttle()) is the default case with `{leading: true, trailing: true}`.

**Explanation**

for the previous example of throttling by 3 dashes

─A─B─C─ ─D─ ─ ─ ─ ─ ─ E─ ─F─G

with `{leading: true, trailing: true}`, we get as below

─A─ ─ ─C─ ─ ─D ─ ─ ─ ─ E─ ─ ─G

with `{leading: false, trailing: true}`, A and E are swallowed.

─ ─ ─ ─C─ ─ ─D─ ─ ─ ─ ─ ─ ─G

with `{leading: true, trailing: false}`, only A D E are kept

─A─ ─ ─ ─D─ ─ ─ ─ ─ ─ E

with `{leading: false, trailing: false}`, of course, nothing happens.

**notes**

1.  please follow above spec. the behavior is not exactly the same as `lodash.throttle()`
    
2.  because `window.setTimeout` and `window.clearTimeout` are not accurate in browser environment, they are replaced to other implementation when judging your code. They still have the same interface, and internally keep track of the timing for testing purpose.
    

Something like below will be used to do the test.

```js
let currentTime = 0

const run = (input) => {
  currentTime = 0
  const calls = []

  const func = (arg) => {
     calls.push(`${arg}@${currentTime}`)
  }

  const throttled = throttle(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => throttled(arg), time)
  })
  return calls
}

expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['A@0', 'C@3'])
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function throttle<T extends (...args: any[]) => any>(
  func: T, 
  wait: number, 
  option: {leading: boolean, trailing: boolean } = {leading: true, trailing: true}
  ): T {
  // your code here
}
```
:::
    
::::


## Related

+ [implement basic throttle()](./implement-basic-throttle)
+ [implement basic debounce()](./implement-basic-debounce)
+ [implement debounce() with leading & trailing option](./implement-debounce-with-leading-and-trailing-option)
+ [throttle Promises](./throttle-Promises)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option)

  