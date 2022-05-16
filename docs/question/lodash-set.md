---
tag:
  - Coding
  - JavaScript
  - Lodash
  - medium

---
  
# implement `_.set()`

## Question
[\_.set(object, path, value)](https://lodash.com/docs/4.17.15#set) is a handy method to updating an object without checking the property existence.

Can you create your own `set()`?

```js
const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}
set(obj, 'a.b.c', 'BFE')
console.log(obj.a.b.c) // "BFE"

set(obj, 'a.b.c.0', 'BFE')
console.log(obj.a.b.c[0]) // "BFE"

set(obj, 'a.b.c[1]', 'BFE')
console.log(obj.a.b.c[1]) // "BFE"

set(obj, ['a', 'b', 'c', '2'], 'BFE')
console.log(obj.a.b.c[2]) // "BFE"

set(obj, 'a.b.c[3]', 'BFE')
console.log(obj.a.b.c[3]) // "BFE"

set(obj, 'a.c.d[0]', 'BFE')
// valid digits treated as array elements
console.log(obj.a.c.d[0]) // "BFE"

set(obj, 'a.c.d.01', 'BFE')
// invalid digits treated as property string
console.log(obj.a.c.d['01']) // "BFE"
```

## Code
:::: code-group
::: code-group-item javascript
```javascript
/**
 * @param {object} obj
 * @param {string | string[]} path
 * @param {any} value
 */
function set(obj, path, value) {
  // your code here
}
```
:::
    ::: code-group-item typescript:active
```typescript
function set<T extends object>(obj: T, path: string | string[], value: any) {
  // your code here
}
```
:::
    
::::


## Related

+ [implement `_.get()`](./implement-lodash-get)
##  Source
[Source From](https://bigfrontend.dev/problem/lodash-set)

  