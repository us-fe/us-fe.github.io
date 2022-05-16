---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# create callback on message channel

## Question
We have `SomeChannel` which allows us to send messages between 2 ports.

```js
const {port1, port2} = new SomeChannel()

port2.onmessage = (message) => {
  console.log(message) // hi
}
port1.postMessage('hi')
```

It looks like [MessageChannel](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel), but `SomeChannel` is not in good condition, it has random delay in sending the messages, which means **the order messages are sent might be different from the order they are received**.

Now your job is to create a `BetterChannel` that enables communication between ports with callback and reply handle, but on top of `SomeChannel`.

```js
const {port1, port2} = new BetterChannel()

port2.onmessage = (message, reply) => {
  if (message === 'ping?') {
    reply('pong!')
  }
  if (message === 'pong?') {
    reply('ping!') 
  }
}

port1.postMessage('ping?', (data) => {
  console.log(data) // 'pong!'
})
```

1.  you should avoid global state outside of the classes.
2.  internally `SomeChannel` must be used.
3.  though there might be delays, messages are guaranteed to be delivered through `SomeChannel`, but it is worthy for you to think about the case in which messages might be dropped.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
// interface SomePort {
//   postMessage: (message: string) => void
//   onmessage?: (message: string) => void
// }

// declare class SomeChannel {
//   port1: SomePort
//   port2: SomePort
// }

class BetterChannel {
  constructor() {
    const {port1, port2} = new SomeChannel()
  }
}
```
:::
    ::: code-group-item typescript
```typescript
interface SomePort {
  postMessage: (message: string) => void
  onmessage?: (message: string) => void
}

declare class SomeChannel {
  port1: SomePort
  port2: SomePort
}

class BetterChannel {
  constructor() {
    const {port1, port2} = new SomeChannel()
  }
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/some-message-channel)

  