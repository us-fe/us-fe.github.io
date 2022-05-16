---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# implement a simple DOM wrapper to support method chaining like jQuery

## Question
I believe you've used jQuery before, we often chain the jQuery methods together to accomplish our goals.

For example, below chained call turns button into a black button with white text.

```js
$('#button')
  .css('color', '#fff')
  .css('backgroundColor', '#000')
  .css('fontWeight', 'bold')
```

The chaining makes the code simple to read, could you create a simple wrapper `$` to make above code work as expected?

The wrapper only needs to have `css(propertyName: string, value: any)`

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-a-simple-DOM-wrapper-to-support-method-chaining-like-jQuery)

  