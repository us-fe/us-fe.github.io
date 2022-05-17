---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# event delegation

## Question
[What is Event Delegation?](https://bigfrontend.dev/question/What-is-Event-Delegation)

Can you create a function which works like [jQuery.on()](https://api.jquery.com/on/), that attaches event listeners to selected elements.

In jQuery, selector is used to target the elements, in this problem, it is changed to a predicate function.

```js
onClick(
  // root element
  document.body,  
  // predicate
  (el) => el.tagName.toLowerCase() === 'div',  
  function(e) {
    console.log(this);
    // this logs all the `div` element
  }
)
```

1.  [event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) and [event.stopImmediatePropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation) should also be supported.
    
2.  you should only attach one real event listener to the root element.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {HTMLElement} root
 * @param {(el: HTMLElement) => boolean} predicate
 * @param {(e: Event) => void} handler
 */
function onClick(root, predicate, handler) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/event-delegation)

  