---
tag:
  - Coding
  - JavaScript
  - medium
---

# Implement a general memoization function - `memo()`

[Memoization](https://whatthefuck.is/memoization) is a common technique to boost performance. If you use React, you definitely have used `React.memo` before.

Memoization is also commonly used in algorithm problem, when you have a recursion solution, in most cases, you can improve it by memoization, and then you might be able to get a Dynamic Programming approach.

So could you implement a general `memo()` function, which caches the result once called, so when same arguments are passed in, the result will be returned right away.

```js
const func = (arg1, arg2) => {
  return arg1 + arg2;
};

const memoed = memo(func);

memoed(1, 2);
// 3, func is called

memoed(1, 2);
// 3 is returned right away without calling func

memoed(1, 3);
// 4, new arguments, so func is called
```

The arguments are arbitrary, so memo should accept an extra resolver parameter, which is used to generate the cache key, like what [\_.memoize()](https://lodash.com/docs/4.17.15#memoize) does.

```js
const memoed = memo(func, () => "samekey");

memoed(1, 2);
// 3, func is called, 3 is cached with key 'samekey'

memoed(1, 2);
// 3, since key is the same, 3 is returned without calling func

memoed(1, 3);
// 3, since key is the same, 3 is returned without calling func
```

Default cache key could be just `Array.from(arguments).join('_')`

_note_

It is a trade-off of space for time, so if you use this in an interview, please do analyze how much space it might cost.

# 解析

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/feADTw7Avbo"
></iframe>

第一个解法

```js
/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  // your code here
  const cache = new Map();

  // If my cache key is in my cache, use that value
  // Why use function() over () => {} ?
  // Because function() uses the context from the caller.
  // Arrow functions use lex scoping, so it'll use the context from the memo function.
  return function () {
    const cacheKey = resolver
      ? resolver(...arguments)
      : Array.from(arguments).join(",");

    if (cache.has(cacheKey)) {
      console.log("cached");
      return cache.get(cacheKey);
    }
    // Otherwise invoke the function and add it to my cache
    const val = func.apply(this, arguments);
    cache.set(cacheKey, val);
    return val;
  };
}
```

存在一个问题就是 this 指向的问题

```js
function fn(a) {
  return `${this.val}_${a}`;
}

const memoFn = memo(fn);

const test1 = {
  val: 1,
  memoFn,
};

const test2 = {
  val: 2,
  memoFn,
};

// 返回 1_1
console.log(test1.memoFn(1));
// 期待返回 2_1 结果被 cache 返回了 1_1
console.log(test2.memoFn(1));
```

更完善的第二个解法

```js
// With this context in mind, check test cases below.
function memo(func, resolver) {
  // your code here
  const cache = new Map();

  // Map<cacheKey, Map<context, value>>
  return function () {
    const cacheKey = resolver
      ? resolver(...arguments)
      : Array.from(arguments).join(",");

    const contextMap = cache.get(cacheKey);
    // If there is a corresponding context map to cachekey
    // Check if context is in the map, if so, return value.
    // Else if no corresponding add contextMap, add new entry to the context map
    if (!contextMap) {
      const value = func.apply(this, arguments);
      cache.set(cacheKey, new Map([[this, value]]));
      return value;
    }

    if (contextMap.has(this)) {
      return contextMap.get(this);
    }
    // If context not in the map, calculate and add to context map.
    const value = func.apply(this, arguments);
    contextMap.set(this, value);
    return value;
  };
}

function testThis(a) {
  return `${this.val}_${a}`;
}

const memoFunc = memo(testThis);

const testSubject = {
  val: 1,
  memo: memoFunc,
};

const testSubject2 = {
  val: 2,
  memo: memoFunc,
};

// 1_1
console.log(testSubject.memo(1));
// Expected no caching and output is 2_1
console.log(testSubject2.memo(1));
// Expected to cache
console.log(testSubject2.memo(1));
```

[Source From](https://bigfrontend.dev/problem/implement-general-memoization-function)
