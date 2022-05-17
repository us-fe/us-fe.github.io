---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# create an Event Emitter

## Question
There is [Event Emitter in Node.js](https://nodejs.org/api/events.html#events_class_eventemitter), Facebook once had [its own implementation](https://github.com/facebookarchive/emitter) but now it is archived.

You are asked to create an Event Emitter Class

```js
const emitter = new Emitter()
```

It should support event subscribing

```js
const sub1  = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)

// same callback could subscribe 
// on same event multiple times
const sub3 = emitter.subscribe('event1', callback1)
```

`emit(eventName, ...args)` is used to trigger the callbacks, with args relayed

```js
emitter.emit('event1', 1, 2);
// callback1 will be called twice
```

Subscription returned by `subscribe()` has a `release()` method that could be used to unsubscribe

```js
sub1.release()
sub3.release()
// now even if we emit 'event1' again, 
// callback1 is not called anymore
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
// please complete the implementation
class EventEmitter {
  subscribe(eventName, callback) {
  	
  }
  
  emit(eventName, ...args) {
  	
  }
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/create-an-Event-Emitter)

  