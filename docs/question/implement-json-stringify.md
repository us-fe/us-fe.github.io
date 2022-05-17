---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# implement JSON.stringify()

## Question
I believe you've used `JSON.stringify()` before, do you know the details of how it handles arbitrary data?

Please have a guess on the details and then take a look at the [explanation on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), it is actually pretty complex.

In this problem, you are asked to implement your own version of `JSON.stringify()`.

In a real interview, you are not expected to cover all the cases, just decide the scope with interviewer. But for a goal of practicing, your code here will be tested against a lot of data types. Please try to cover as much as you can.

Attention to the circular reference.

_note_

`JSON.stringify()` support two more parameters which is not required here.

**Don't use JSON.stringify() in your code here**, it doesn't help you practicing coding skills.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  // your code here
}
```
:::
    
::::


## Related

+ [implement JSON.parse()](./implement-JSON-parse)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-JSON-stringify)

  