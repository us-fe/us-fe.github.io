---
tag:
  - Coding
  - JavaScript
  - Lodash
  - medium

---
  
# implement debounce() with leading & trailing option

## Question
This is a follow up on [6\. implement basic debounce()](/problem/implement-basic-debounce), please refer to it for detailed explanation.

In this problem, you are asked to implement an enhanced `debounce()` which accepts third parameter, `option: {leading: boolean, trailing: boolean}`

1.  leading: whether to invoke right away
2.  trailing: whether to invoke after the delay.

[6\. implement basic debounce()](/problem/implement-basic-debounce()) is the default case with `{leading: false, trailing: true}`.

for the previous example of debouncing by 3 dashes

─A─B─C─ ─D─ ─ ─ ─ ─ ─ E─ ─F─G

with {leading: false, trailing: true}, we get as below

─ ─ ─ ─ ─ ─ ─ ─D─ ─ ─ ─ ─ ─ ─ ─ ─ G

with {leading: true, trailing: true}:

─A─ ─ ─ ─ ─ ─ ─D─ ─ ─E─ ─ ─ ─ ─ ─G

with {leading: true, trailing: false}

─A─ ─ ─ ─ ─ ─ ─ ─ ─ ─E

with {leading: false, trailing: false}, of course, nothing happens.

**notes**

1.  please follow above spec. the behavior might not be exactly the same as `lodash.debounce()`
    
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

  const debounced = debounce(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => debounced(arg), time)
  })
  return calls
}

expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@6'])
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
function debounce(func, wait, option = {leading: false, trailing: true}) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function debounce<T extends (...args: any[]) => any>(
  func: T, 
  wait: number, 
  option: {leading: boolean, trailing: boolean} = {leading: false, trailing: true}
  ): T {
  // your code here
}
```
:::
    
::::


## Related

+ [implement basic throttle()](./implement-basic-throttle)
+ [implement throttle() with leading & trailing option](./implement-throttle-with-leading-and-trailing-option)
+ [implement basic debounce()](./implement-basic-debounce)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-debounce-with-leading-and-trailing-option)

  