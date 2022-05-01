---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# implement Observable fromEvent()

This is a follow-up on [57\. create an Observable](https://bigfrontend.dev/problem/create-an-Observable).

Suppose you have solved [57\. create an Observable](https://bigfrontend.dev/problem/create-an-Observable), here you are asked to implement a creation operator `fromEvent()`( for DOM Event)

From the [document](https://rxjs-dev.firebaseapp.com/api/index/function/fromEvent), `fromEvent()`

> Creates an Observable that emits events of a specific type coming from the given event target.

Simply speaking, it is a util to attach event listener in Observable fashion.

```js
const source = fromEvent(node, 'click')
source.subscribe((e) => console.log(e))
```

When `node` is clicked, the event is logged.

**Note**

1.  Observable is already given for you, no need to create it.
2.  the event listener removal is handled by [add()](https://rxjs-dev.firebaseapp.com/api/index/class/Subscription#add), which is beyond our scope here, you can ignore that.


[Source From](https://bigfrontend.dev/problem/implement-Observable-fromEvent)

  