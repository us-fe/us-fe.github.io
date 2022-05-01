---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# implement Observable Transformation Operators

This is a follow-up on [57\. create an Observable](https://bigfrontend.dev/problem/create-an-Observable).

There are [a lot of operators](https://rxjs-dev.firebaseapp.com/guide/operators) for Observable, if we think of Observable as event stream, then modifying the stream is a common task, transformation operators are useful at this.

In this problem, you are asked to implement [map()](https://rxjs-dev.firebaseapp.com/api/operators/map), as the name indicates, it maps the value to another value thus creating a new event stream.

Here is an example.

```js
const source = Observable.from([1,2,3])

map(x => x * x)(source) // this transformer doubles numbers and create a new stream
 .subscribe(console.log)
// 1
// 4
// 9
```

Observable has `pipe()` method which could make this more readable.

```js
const source = Observable.from([1,2,3])

source.pipe(map(x => x * x))
 .subscribe(console.log)
// 1
// 4
// 9
```

**Note** Observable is already given for you, no need to create it.


[Source From](https://bigfrontend.dev/problem/implement-Observable-transformation-operators)

  