---
tag:
  - Coding
  - JavaScript
  - Lodash
  - medium

---
  
# implement `_.get()`

## Question
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

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  // your code here
}
```
:::
    
::::


## Related

+ [implement `_.set()`](./lodash-set)
##  Source
[Source From](https://bigfrontend.dev/problem/implement-lodash-get)

  