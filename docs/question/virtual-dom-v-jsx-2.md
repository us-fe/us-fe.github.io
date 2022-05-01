---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# Virtual DOM V - JSX 2

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


[Source From](https://bigfrontend.dev/problem/virtual-dom-v-jsx-2)

  