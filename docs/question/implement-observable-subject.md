---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# implement Observable Subject

## Question
This is a follow-up on [57\. create an Observable](https://bigfrontend.dev/problem/create-an-Observable).

Plain Observables are unicast, meaning every subscription is independent. To create multicast, you need to use [Subject](https://rxjs-dev.firebaseapp.com/guide/subject).

Following code is easier to understand.

```js
// default behavior with plain Observable
const observable = from([1,2,3])
observable.subscribe(console.log)
observable.subscribe(console.log)
// 1
// 2
// 3
// 1
// 2
// 3
```

You can see that two subscriptions are independent so the logs are grouped by subscription.

with Subject, it works like Event Listeners in DOM world.

```js
const subject = new Subject()
subject.subscribe(console.log)
subject.subscribe(console.log)
 
const observable = from([1, 2, 3])
observable.subscribe(subject)

// 1
// 1
// 2
// 2
// 3
// 3
```

Now the logs are different! That is because Subject first works as a observer, get the values, then works as an Observable and dispatch the value to different observers.

Cool right? Ok, you are asked to **implement a simple `Subject Class`**.

1.  `Observable` is given for you, you can just use it.
2.  you can use `new Observer({next,error,complete})` or `new Observer(function)` to create an observer.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
// You can use Observer which is bundled to your code

// class Observer {
//   // subscriber could one next function or a handler object {next, error, complete}
//   constructor(subscriber) { }
//   next(value) { }
//   error(error) { }
//   complete() {}
// }


class Subject {
  constructor() {
   
  }
  subscribe(subscriber) {
    
  }
}
```
:::
    
::::


## Related

+ [create an Observable](./create-an-Observable)
+ [implement Observable.from()](./implement-Observable-from)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-Observable-Subject)

  