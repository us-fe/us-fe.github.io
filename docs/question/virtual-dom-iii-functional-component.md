---
tag:
  - Coding
  - JavaScript
  - Easy

---
  
# Virtual DOM III - Functional Component

## Question
> This is a follow-up on [118\. Virtual DOM II - createElement](https://bigfrontend.dev/problem/virtual-dom-II-createElement).

In problem 118, you are asked to implement `createElement()` and `render()` function which supports intrinsic HTML elements, like `<p/>`, `<div/>` etc.

In this problem, you are ask to support custom **Functional Component**.

[Functional Component](https://reactjs.org/docs/components-and-props.html#function-and-class-components) are functions that:

1.  accept **single object argument** -`props`, which contains `children`, `className` and other properties.
2.  returns an MyElement by calling `createElement()`.

Say we have a Functional Component - `Title`

```js
const h = createElement
const Title = ({children, ...res}) => h('h1', res, ...children)
```

Then we should be able to use it in `createElement` and `render()`, just the same way as an intrinsic element.

```js
h(Title, {}, 'This is a title')

h(Title, {className: 'class1'}, 'This is a title')
```

Please **modify your createElement() and render()** from [118\. Virtual DOM II - createElement](https://bigfrontend.dev/problem/virtual-dom-II-createElement) if necessary, so that the example in problem 118 could be rewritten as below:

```js
const Link = 
  ({children, ...res}) => h('a', res, ...children)
const Name = 
  ({children, ...res}) => h('b', res, ...children)
const Button = 
  ({children, ...res}) => h('button', res, ...children)
const Paragraph = 
  ({children, ...res}) => h('p', res, ...children)
const Container =  
  ({children, ...res}) => h('div', res, ...children)

h(
  Container,
  {},
  h(Title, {}, ' this is '),
  h(
    Paragraph,
    { className: 'paragraph' },
    ' a ',
    h(Button, {}, ' button '),
    ' from ',
    h(
      Link, 
      { href: 'https://bfe.dev' }, 
      h(Name, {}, 'BFE'), 
      '.dev')
  )
)
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 * type FunctionComponent = (props: object) => MyElement
 */

/**
 * @param { string | FunctionComponent } type - valid HTML tag name or Function Component
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  // your code here
}


/**
 * @param { MyElement }
 * @returns { HTMLElement } 
 */
function render(myElement) {
  // your code here
}
```
:::
    
::::


## Related

+ [Virtual DOM I](./Virtual-DOM-I)
+ [Virtual DOM II - createElement](./virtual-dom-II-createElement)
+ [Virtual DOM IV - JSX 1](./virtual-dom-iv-jsx-1)
+ [Virtual DOM V - JSX 2](./virtual-dom-v-jsx-2)
##  Source
[Source From](https://bigfrontend.dev/problem/virtual-DOM-III-Functional-Component)

  