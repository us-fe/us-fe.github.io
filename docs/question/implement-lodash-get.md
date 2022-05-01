---
tag:
  - Coding
  - JavaScript
  - Lodash
  - medium

---
  
# implement `_.get()`

[\_.get(object, path, \[defaultValue\])](https://lodash.com/docs/4.17.15#get) is a handy method to help retrieving data from an arbitrary object. if the resolved value from `path` is `undefined`, `defaultValue` is returned.

Can you create your own `get()`?

```js
const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}

get(obj, 'a.b.c') // [1,2,3]
get(obj, 'a.b.c.0') // 1
get(obj, 'a.b.c[1]') // 2
get(obj, ['a', 'b', 'c', '2']) // 3
get(obj, 'a.b.c[3]') // undefined
get(obj, 'a.c', 'bfe') // 'bfe'
```


[Source From](https://bigfrontend.dev/problem/implement-lodash-get)

  