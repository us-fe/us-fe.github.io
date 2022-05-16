---
tag:
  - Coding
  - JavaScript
  - lit-html
  - easy

---
  
# lit-html 1 - tagged templates

## Question
According to [lit-html homepage](https://lit-html.polymer-project.org/),

> lit-html lets you write HTML templates in JavaScript, then efficiently render and re-render those templates together with data to create and update DOM

[This video](https://www.youtube.com/watch?v=ruql541T7gc&feature=emb_title) explains it pretty well about how it works. Let's take a look at the example.

```js
import {html, render} from 'lit-html'
const helloTemplate = (name) => html`<div>Hello ${name}!</div>`

// This renders <div>Hello Steve!</div> to the document body
render(helloTemplate('Steve'), document.body)

// This updates to <div>Hello Kevin!</div>, but only updates the ${name} part
render(helloTemplate('Kevin'), document.body);
```

The magic happens in the second call of `render()` which only updates the necessary parts.

But there will be a series of problems on BFE.dev leading to that, here you are asked to :

**implement html() and render() to make above example work, without considering the rerender**, so html() could just return the raw HTML string.

The input data are all valid.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
function html(/** your code here **/) {
  // your code here
}


// render the result from html() into the container
function render(result, container) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/lit-html-1-tagged-templates)

  