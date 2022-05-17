---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - DOM
  - Medium

---
  
# Virtual DOM I

## Question
Suppose you have solved [110\. serialize and deserialize binary tree](https://bigfrontend.dev/problem/serialize-and-deserialize-binary-tree), have you wondered how to do similar task to DOM tree ?

HTML string could be thought as some sort of [serialization](https://en.wikipedia.org/wiki/Serialization), the browser parses(deserialize) the HTML → construct the DOM tree.

Besides XML base, we could try JSON for this. If we log the element presentation in React, like below

```js
const el = <div>
 <h1> this is </h1>
 <p className="paragraph"> a <button> button </button> from <a href="https://bfe.dev"><b>BFE</b>.dev</a>
 </p>
</div>;

console.log(el)
```

we would get this( ref, key .etc are stripped off)

```js
{
  type: 'div',
  props: {
    children: [
      {
        type: 'h1',
        props: {
          children: ' this is '
        }
      },
      {
        type: 'p',
        props: {
          className: 'paragraph',
          children: [
            ' a ',
            {
              type: 'button',
              props: {
                children: ' button '
              }
            },
            ' from',
            {
              type: 'a',
              props: {
                href: 'https://bfe.dev',
                children: [
                  {
                    type: 'b',
                    props: {
                      children: 'BFE'
                    }
                  },
                  '.dev'
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
```

Clearly this is the same tree structure but only in object literal.

Now you are asked to serialize/deserialize the DOM tree, like what React does.

**Note**

**Functions like event handlers and custom components are beyond the scope of this problem, you can ignore them**, just focus on basic HTML tags.

You should support:

1.  TextNode (string) as children
2.  single child and multiple children
3.  camelCased properties.

`virtualize()` takes in a real DOM tree and create an object literal `render()` takes in a object literal presentation and recreate a DOM tree.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {HTMLElement} 
 * @return {object} object literal presentation
 */
function virtualize(element) {
  // your code here
}


/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement} 
 */
function render(obj) {
  // your code here
}
```
:::
    
::::


## Related

+ [Virtual DOM II - createElement](./virtual-dom-II-createElement)
+ [Virtual DOM III - Functional Component](./virtual-DOM-III-Functional-Component)
+ [Virtual DOM IV - JSX 1](./virtual-dom-iv-jsx-1)
+ [Virtual DOM V - JSX 2](./virtual-dom-v-jsx-2)
##  Source
[Source From](https://bigfrontend.dev/problem/Virtual-DOM-I)

  