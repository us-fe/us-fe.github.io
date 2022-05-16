---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# create a fake timer (setInterval)

## Question
This is a follow-up on [36\. create a fake timer(setTimeout)](https://bigfrontend.dev/problem/create-a-fake-timer)

Like `setTimeout`, `setInterval` also is not accurate. (please refer [Event Loop](https://javascript.info/event-loop) for detail).

This is OK in general web application, but might be problematic in test.

Could you implement your own `setInterval()` and `clearInterval()` to be sync? so that they have **accurate timing** for test. This is what [FakeTimes](https://github.com/sinonjs/fake-timers) are for.

By "accurate", it means **suppose all functions cost no time**, we start our function at time `0`, then `setInterval(func1, 100)` would schedule `func1` exactly at `100, 200, 300 .etc`.

You need to replace `Date.now()` as well to provide the time.

```js
class FakeTimer {
  install() {
    // replace window.setInterval, window.clearInterval, Date.now
    // with your implementation
  }
  
  uninstall() {
    // restore the original implementation of
    // window.setInterval, window.clearInterval, Date.now
  }
  
  tick() {
    // run the scheduled functions without waiting
  }
}
```

\*\* Be careful about the infinite loops \*\*. Your code is tested like this:

```js
const fakeTimer = new FakeTimer()
fakeTimer.install()

const logs = []
const log = () => {
    logs.push(Date.now())
}

let count = 0
const id = setInterval(() => {
  if (count > 1) {
    clearInterval(id)
  } else {
    log()
  }
  count += 1
}, 100)
// log 'A' at every 100, stop at 200
fakeTimer.tick()
fakeTimer.uninstall()
 
expect(logs).toEqual([100,200])
```

_Note_

Only `Date.now()` is used when judging your code, you can ignore other time related apis.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
class FakeTimer {
  install() {
    // replace window.setInterval, window.clearInterval, Date.now
    // with your implementation
  }
  
  uninstall() {
    // restore the original implementation of
    // window.setInterval, window.clearInterval, Date.now
  }
  
  tick() {
    // run the scheduled functions without waiting
  }
}
```
:::
    
::::


## Related

+ [create a fake timer(setTimeout)](./create-a-fake-timer)
##  Source
[Source From](https://bigfrontend.dev/problem/create-a-fake-timer-setInterval)

  