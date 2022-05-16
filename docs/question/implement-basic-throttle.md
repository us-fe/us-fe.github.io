---
tag:
  - Coding
  - JavaScript
  - Lodash
  - medium

---
  
# implement basic throttle()

## Question
Throttling is a common technique used in Web Application, in most cases using [lodash solution](https://lodash.com/docs/4.17.15#throttle) would be a good choice.

could you implement your own version of basic `throttle()`?

In case you forgot, `throttle(func, delay)` will return a throttled function, which will invoke the func at a max frequency no matter how throttled one is called.

Here is an example.

Before throttling we have a series of calling like

─A─B─C─ ─D─ ─ ─ ─ ─ ─ E─ ─F─G

After throttling at wait time of 3 dashes

─A─ ─ ─C─ ─ ─D ─ ─ ─ ─ E─ ─ ─G

Be aware that

*   call A is triggered right way because not in waiting time
*   function call B is swallowed because B, C is in the cooling time from A, and C is latter.

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
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function throttle<T extends (...args:any[]) => any>(func: T, wait: number): T {
  // your code here
}
```
:::
    
::::


## Related

+ [implement throttle() with leading & trailing option](./implement-throttle-with-leading-and-trailing-option)
+ [implement basic debounce()](./implement-basic-debounce)
+ [implement debounce() with leading & trailing option](./implement-debounce-with-leading-and-trailing-option)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-basic-throttle)

  