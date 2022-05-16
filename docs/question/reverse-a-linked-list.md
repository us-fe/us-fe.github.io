---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - easy

---
  
# reverse a linked list

## Question
Another basic algorithm even for Front End developers.

You are asked to **reverse a linked list**.

Suppose we have Node interface like this

```ts
class Node {
   new(val: number, next: Node);
   val: number
   next: Node
}
```

We can then chain nodes together to create a linked list.

```ts
const Three = new Node(3, null)
const Two = new Node(2, Three)
const One = new Node(1, Two)

//now we have  a linked list
// 1 → 2 → 3
```

Now how can you reverse it to 3 → 2 → 1 ? you can modify the `next` property of each node, but not the `val`.

_Follow up_

Could you solve it with and without recursion?

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/** 
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node} 
 */
const reverseLinkedList = (list) => {
    // your code
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/Reverse-a-linked-list)

  