---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - medium

---
  
# create a Priority Queue in JavaScript

## Question
[Priority Queue](https://storm.cis.fordham.edu/~yli/documents/CISC2200Spring15/Graph.pdf) is a commonly used data structure in algorithm problem. Especially useful for **Top K** problem with a huge amount of input data, since it could avoid sorting the whole but keep a fixed-length sorted portion of it.

Since there is no built-in Priority Queue in JavaScript, in a real interview, you should tell interview saying that "Suppose we already have a Priority Queue Class I can use", there is no time for you to write a Priority Queue from scratch.

But it is a good coding problem to practice, so please implement a Priority Queue with following interface

```js
class PriorityQueue {
  // compare is a function defines the priority, which is the order
  // the elements closer to first element is sooner to be removed.
  constructor(compare) {
  
  }
  
  // add a new element to the queue
  // you need to put it in the right order
  add(element) {

  }

  // remove the head element and return
  poll() {
  
  }

  // get the head element
  peek() {

  }

  // get the amount of items in the queue
  size() {

  }
}
```

Here is an example to make it clearer

```js
const pq = new PriorityQueue((a, b) => a - b)
// (a, b) => a - b means
// smaller numbers are closer to index:0
// which means smaller number are to be removed sooner

pq.add(5)
// now 5 is the only element

pq.add(2)
// 2 added

pq.add(1)
// 1 added

pq.peek()
// since smaller number are sooner to be removed
// so this gives us 1

pq.poll()
// 1 
// 1 is removed, 2 and 5 are left

pq.peek()
// 2 is the smallest now, this returns 2

pq.poll()
// 2 
// 2 is removed, only 5 is left
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
// complete the implementation
class PriorityQueue {
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare - 
   * compare function, similar to parameter of Array.prototype.sort
   */
  constructor(compare) {
    this.compare = compare;
  }

  /**
   * return {number} amount of items
   */
  size() {

  }

  /**
   * returns the head element
   */
  peek() {

  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
   
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    
  }
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/create-a-priority-queue-in-JavaScript)

  