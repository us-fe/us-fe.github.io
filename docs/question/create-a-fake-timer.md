---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# create a fake timer(setTimeout)

## Question
`setTimeout` adds task in to a task queue to be handled later, the time actually is no accurate. ([Event Loop](https://javascript.info/event-loop)).

This is OK in general web application, but might be problematic in test.

For example, at [5\. implement throttle() with leading & trailing option](https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option) we need to test the timer with more accurate approach.

Could you implement your own `setTimeout()` and `clearTimeout()` to be sync? so that they have **accurate timing** for test. This is what [FakeTimes](https://github.com/sinonjs/fake-timers) are for.

By "accurate", it means **suppose all functions cost no time**, we start our function at time `0`, then `setTimeout(func1, 100)` would schedule `func1` exactly at `100`.

You need to replace `Date.now()` as well to provide the time.

```js
class FakeTimer {
  install() {
    // setTimeout(), clearTimeout(), and Date.now() 
    // are replaced
  }

  uninstall() {
    // restore the original APIs
    // setTimeout(), clearTimeout() and Date.now()
  }

  tick() {
     // run all the schedule functions in order
  }
}
```

Your code is tested like this

```js

const fakeTimer = new FakeTimer()
fakeTimer.install()

const logs = []
const log = (arg) => {
   logs.push([Date.now(), arg])
}

setTimeout(() => log('A'), 100)
// log 'A' at 100

const b = setTimeout(() => log('B'), 110)
clearTimeout(b)
// b is set but cleared

setTimeout(() => log('C'), 200)

expect(logs).toEqual([[100, 'A'], [200, 'C']])

fakeTimer.uninstall()
```

_Note_

Only `Date.now()` is used when judging your code, you can ignore other time related apis.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
class FakeTimer {
  install() {
    // replace window.setTimeout, window.clearTimeout, Date.now
    // with your implementation
  }
  
  uninstall() {
    // restore the original implementation of
    // window.setTimeout, window.clearTimeout, Date.now
  }
  
  tick() {
    // run the scheduled functions without waiting
  }
}
```
:::
    
::::


## Related

+ [create a fake timer (setInterval)](./create-a-fake-timer-setInterval)
##  Source
[Source From](https://bigfrontend.dev/problem/create-a-fake-timer)

  