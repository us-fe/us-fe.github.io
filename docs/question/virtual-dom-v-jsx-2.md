---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# Virtual DOM V - JSX 2

## Question
> This is a follow-up on [143\. Virtual DOM IV - JSX 1](/problem/virtual-dom-iv-jsx-1).

Congratulations on your pass on problem 143!

Now in this problem, please modify your code to support following.

### 1\. nesting elements

```ts
<p><i>BFE.dev</i> is <b>cool</b>!</p>
```

This means JSXChild needs to support JSXElement as well.

```diff
JSXChild:
   JSXText
+  JSXElement
```

### 2\. Functional Component

As a convention, intrinsic HTML tags are lower cases and [Functional Components](/problem/virtual-DOM-III-Functional-Component) have capitalized initials.

```ts
const Heading = 
  ({children, ...res}) => h('h1', res, ...children)
  
<Heading>BFE.<i>dev</i></Heading>
```

If your code in problem 143 already supports this, that's fantastic 👍! Just copy your code here and hope it shall pass.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {code} string
 * @returns {any} AST 
 */
function parse(code) {
  // your code here
}

/**
 * @param {any} your AST
 * @returns {string} 
 */
function generate(ast) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
type JSXOpeningElement = {
  tag: string
}

type JSXClosingElement = {
  tag: string
}

type JSXChildren = Array<string | JSXElement>

type JSXElement= {
  openingElement: JSXOpeningElement
  children: JSXChildren
  closingElement: JSXClosingElement
}

function parse(code: string): JSXElement {
  // your code here
}

function generate(ast: JSXElement): string {
  // your code here
}
```
:::
    
::::


## Related

+ [Virtual DOM I](./Virtual-DOM-I)
+ [Virtual DOM II - createElement](./virtual-dom-II-createElement)
+ [Virtual DOM III - Functional Component](./virtual-DOM-III-Functional-Component)
+ [Virtual DOM IV - JSX 1](./virtual-dom-iv-jsx-1)
##  Source
[Source From](https://bigfrontend.dev/problem/virtual-dom-v-jsx-2)

  