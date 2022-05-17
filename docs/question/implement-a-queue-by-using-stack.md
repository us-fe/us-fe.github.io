---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - ByteDance
  - Medium

---
  
# Implement a Queue by using Stack

## Question
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

now suppose you have a stack, which has only follow interface:

```js
class Stack {
  push(element) { /* add element to stack */ }
  peek() { /* get the top element */ }
  pop() { /* remove the top element */}
  size() { /* count of elements */}
}
```

Could you implement a Queue by using only above Stack? A Queue must have following interface

```js
class Queue {
  enqueue(element) { /* add element to queue, similar to Array.prototype.push */ }
  peek() { /* get the head element*/ }
  dequeue() { /* remove the head element, similar to Array.prototype.pop */ }
  size() { /* count of elements */ }
}
```

_note_

you can only use Stack as provided, Array should be avoided for the purpose of practicing.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
  enqueue(element) { 
    // add new element to the rare
  }
  peek() { 
    // get the head element
  }
  size() { 
    // return count of element
  }
  dequeue() {
    // remove the head element
  }
}
```
:::
    ::: code-group-item typescript
```typescript
/* you can use this Class which is bundled together with your code */

declare class Stack {
  push(element: any): void
  peek(): any
  pop(): any
  size(): number
}

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
  enqueue(element: any) { 
    // add new element to the rare
  }
  peek() { 
    // get the head element
  }
  size() { 
    // return count of element
  }
  dequeue() {
    // remove the head element
  }
}
```
:::
    
::::


## Related

+ [Implement a Stack by using Queue](./Implement-a-Stack-by-using-Queue)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-a-queue-by-using-stack)

  