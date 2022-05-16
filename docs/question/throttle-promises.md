---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# throttle Promises

## Question
Say you need to fetch some data through 100 APIs, and as soon as possible.

If you use `Promise.all()`, 100 requests go to your server at the same time, which is a burden to low spec servers.

Can you **throttle your API calls so that always maximum 5 API calls at the same time**?

You are asked to create a general `throttlePromises()` which takes an array of functions returning promises, and a number indicating the maximum concurrent pending promises.

```js

throttleAsync(callApis, 5).then((data) => {
  // the data is the same as `Promise.all` 
}).catch((err) => {
  // any error occurs in the callApis would be relayed here
})
```

By running above code, at any time, no more than 5 APIs are requested, so low spec servers are saved.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max){
  // your code here
}
```
:::
    
::::


## Related

+ [implement basic throttle()](./implement-basic-throttle)
+ [implement throttle() with leading & trailing option](./implement-throttle-with-leading-and-trailing-option)
##  Source
[Source From](https://bigfrontend.dev/problem/throttle-Promises)

  