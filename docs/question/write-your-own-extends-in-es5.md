---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# write your own `extends` in es5

## Question
I believe you've used [extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) keyword in you JavaScript programs before.

Could you implement a `myExtends()` function in ES5 to mimic the behavior of `extends`?

`myExtends()` takes a SubType and SuperType, and return a new type.

```js

const InheritedSubType = myExtends(SuperType, SubType)

const instance = new InheritedSubType()

// above should work (almost) the same as follows

class SubType extends SuperType {}
const instance = new SubType()
```

To solve this problem, you need to fully understand what is [Inheritance](https://javascript.info/class-inheritance)

_note_

Your code will be test against following SuperType and SubType

```js

function SuperType(name) {
    this.name = name
    this.forSuper = [1, 2]
    this.from = 'super'
}
SuperType.prototype.superMethod = function() {}
SuperType.prototype.method = function() {}
SuperType.staticSuper = 'staticSuper'

function SubType(name) {
    this.name = name
    this.forSub = [3, 4]
    this.from = 'sub'
}

SubType.prototype.subMethod = function() {}
SubType.prototype.method = function() {}
SubType.staticSub = 'staticSub'
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
const myExtends = (SuperType, SubType) => {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/write-your-own-extends-in-es5)

  