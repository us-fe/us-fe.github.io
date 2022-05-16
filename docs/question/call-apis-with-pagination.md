---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# call APIs with pagination

## Question
Have you ever met some APIs with pagination, and needed to recursively fetch them based on response of previous request ?

Suppose we have a `/list` API, which returns an array `items`.

```ts
// fetchList is provided for you
const fetchList = (since?: number) => 
  Promise<{items: Array<{id: number}>}>
```

1.  for initial request, we just fetch `fetchList`. and get the last item id from response.
2.  for next page, we need to call `fetchList(lastItemId)`.
3.  repeat above process.

The `/list` API only gives us 5 items at a time, with server-side filtering, it might be less than 5. But if none returned, it means nothing to fetch any more and we should stop.

You are asked to create a function that could return arbitrary amount of items.

```ts
const fetchListWithAmount = (amount: number = 5) { }
```

_note_

You can achieve this by regular loop, even fancier solutions with [async iterators or async generators](https://javascript.info/async-iterators-generator). You should try them all.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
// fetchList is provided for you
// const fetchList = (since?: number) => 
//   Promise<{items: Array<{id: number}>}>


// you can change this to generator function if you want
const fetchListWithAmount = async (amount = 5) => {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/call-APIs-with-pagination)

  