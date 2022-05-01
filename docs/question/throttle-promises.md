---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# throttle Promises

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


[Source From](https://bigfrontend.dev/problem/throttle-Promises)

  