---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement classNames()

## Question
If using React, you can set the prop `className` to add class name to an element, it is string so you can add multiple class names like this:

```js
<p className="classname1 classname2">
  BFE.dev can help
</p>
```

When class names are dynamically generated, it becomes verbose.

```js
<p 
  className={`classname1  ${shouldAddClassname2 ? 'classname2' : ''}`}>
  BFE.dev can help
</p>
```

[classnames](https://www.npmjs.com/package/classnames) can help with this.

`classNames()` accepts arbitrary arguments, filter out the falsy values, and generate the final className string.

1.  string and number are used directly.

```js
classNames('BFE', 'dev', 100) 
// 'BFE dev 100'
```

2.  other primitives are ignored.

```js
classNames(
  null, undefined, Symbol(), 1n, true, false
) 
// ''
```

3.  Object's enumerable property keys are kept if the key is string and value is truthy. [Array should be flattened](https://bigfrontend.dev/problem/implement-Array-prototype.flat).

```js

const obj = new Map()
obj.cool = '!'

classNames({BFE: [], dev: true, is: 3}, obj) 
// 'BFE dev is cool'

classNames(['BFE', [{dev: true}, ['is', [obj]]]])
// 'BFE dev is cool'
```

**Please implement your own classNames()**.

**note**

It is not the goal to reimplement the original package, so the spec might be a little different, please follow the above description.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {any[]} args
 * @returns {string}
 */
function classNames(...args) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-classnames)

  