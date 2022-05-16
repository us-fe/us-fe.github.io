---
tag:
  - Coding
  - JavaScript
  - Lodash
  - easy

---
  
# implement basic debounce()

## Question
Debounce is a common technique used in Web Application, in most cases using [lodash solution](https://lodash.com/docs/4.17.15#debounce) would be a good choice.

could you implement your own version of basic `debounce()`?

In case you forgot, `debounce(func, delay)` will returned a debounced function, which delays the invoke.

Here is an example.

Before debouncing we have a series of calling like

─A─B─C─ ─D─ ─ ─ ─ ─ ─E─ ─F─G

After debouncing at wait time of 3 dashes

─ ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G

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

expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@5'])
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  // your code here
}
```
:::
    
::::


## Related

+ [implement basic throttle()](./implement-basic-throttle)
+ [implement throttle() with leading & trailing option](./implement-throttle-with-leading-and-trailing-option)
+ [implement debounce() with leading & trailing option](./implement-debounce-with-leading-and-trailing-option)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-basic-debounce)

  