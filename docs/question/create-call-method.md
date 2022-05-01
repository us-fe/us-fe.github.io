---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# create your own `Function.prototype.call`

[Function.prototype.call](https://tc39.es/ecma262/#sec-function.prototype.call) is very useful when we want to alter the `this` of a function.

Can you implement your own `myCall`, which returns the same result as `Function.prototype.call`?

For the [newest ECMAScript spec](https://tc39.es/ecma262/#sec-function.prototype.call), `thisArg` are not transformed. And not replaced with window in [Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

Your implementation should follow above spec and do what _non_ Strict Mode does.

`Function.prototype.call/apply/bind` and [Reflect.apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply) should not be used.


[Source From](https://bigfrontend.dev/problem/create-call-method)

  