---
tag:
  - Coding
  - JavaScript
  - hard?

---
  
# implement your own URLSearchParams

When we want to extract parameters from query string, [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) could be very handy.

Can you implement `MyURLSearchParams` which works the same ?

```js
const params = new MyURLSearchParams('?a=1&a=2&b=2')
params.get('a') // '1'
params.getAll('a') // ['1', '2']
params.get('b') // '2'
params.getAll('b') // ['2']


params.append('a', 3)
params.set('b', '3')
params.toString() // 'a=1&a=2&b=3&a=3'
```

There are [a few methods](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) on URLSearchParams, please implement them all.


[Source From](https://bigfrontend.dev/problem/implement-your-own-URLSearchParams)

  