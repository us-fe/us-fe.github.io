---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - medium

---
  
# Implement a Stack by using Queue

> This is reversed problem of [13\. Implement a Queue by using Stack](https://bigfrontend.dev/problem/implement-a-queue-by-using-stack)

In JavaScript, we could use array to work as both a Stack or a queue.

```js
const arr = [1, 2, 3, 4]

arr.push(5) // now array is [1, 2, 3, 4, 5]
arr.pop() // 5, now the array is [1, 2, 3, 4]
```

Above code is a Stack, while below is a Queue

```js
const arr = [1, 2, 3, 4]

arr.push(5) // now the array is [1, 2, 3, 4, 5]
arr.shift() // 1, now the array is [2, 3, 4, 5]
```

now suppose you have a Queue, which has only follow interface:

```js
class Queue {
  enqueue(element) { /* add element to queue, similar to Array.prototype.push */ }
  peek() { /* get the head element*/ }
  dequeue() { /* remove the head element, similar to Array.prototype.pop */ }
  size() { /* count of elements */ }
}
```

Could you implement a Stack by using only above Queue? A Stack must have following interface

```js
class Stack {
  push(element) { /* add element to stack */ }
  peek() { /* get the top element */ }
  pop() { /* remove the top element */}
  size() { /* count of elements */}
}
```

_note_

you can only use Queue as provided. Don't use Array, it is not what this is for.


[Source From](https://bigfrontend.dev/problem/Implement-a-Stack-by-using-Queue)

  