---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# Improve a function

```js

// Given an input of array, 
// which is made of items with >= 3 properties

let items = [
  {color: 'red', type: 'tv', age: 18}, 
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
] 

// an exclude array made of key value pair
const excludes = [ 
  {k: 'color', v: 'silver'}, 
  {k: 'type', v: 'tv'}, 
  ...
] 

function excludeItems(items, excludes) { 
  excludes.forEach( pair => { 
    items = items.filter(item => item[pair.k] === item[pair.v])
  })
 
  return items
} 
```

1.  What does this function `excludeItems` do?
2.  Is this function working as expected ?
3.  What is the time complexity of this function?
4.  How would you optimize it ?

_note_

we only judge by the result, not the time cost. please submit the best approach you can.


[Source From](https://bigfrontend.dev/problem/improve-a-function)

  