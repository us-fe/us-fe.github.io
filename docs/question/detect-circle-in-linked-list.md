---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - Easy

---
  
# detect circle in linked list

## Question
A [Singly Linked List](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list) is a bunch of nodes linked in one direction.

```ts
class Node {
  val: any
  next: Node
  constructor(val: any, next:Node) {
    this.val = val
    this.next = next
  }
}

const node2 = new Node(2)
const node1 = new Node(1, node2) // connect 1 -> 2
```

A Node might link to a node before it, thus creating a circle.

Can you write a function to detect it?

**Follow-up**

What is the space cost for your approach? Can you solve it **without extra space**?

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {Node} head
 * @return {boolean}
 */
function hasCircle(head) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/detect-circle-in-linked-list)

  