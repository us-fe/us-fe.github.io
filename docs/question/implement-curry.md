---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# implement curry()

[Currying](https://en.wikipedia.org/wiki/Currying) is a useful technique used in JavaScript applications.

Please implement a `curry()` function, which accepts a function and return a curried one.

Here is an example

```js
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
```

more to read

[https://javascript.info/currying-partials](https://javascript.info/currying-partials)

[https://lodash.com/docs/4.17.15#curry](https://lodash.com/docs/4.17.15#curry)


[Source From](https://bigfrontend.dev/problem/implement-curry)

  