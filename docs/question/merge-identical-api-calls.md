---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# merge identical API calls

Suppose we have a utility function `getAPI()` which fetches data.

```ts
const getAPI =  <T>(
  path: string, 
  config: SomeConfig
): Promise<T> => { ... }

const list1 = await getAPI('/list', { keyword: 'bfe'})
const list2 = await getAPI('/list', { keyword: 'dev'})
```

It works great. Util the UI become so complicated that same API might be called for multiple time within a relatively short period of time.

You want to avoid the unnecessary API calls, based on following assumption:

**GET API call response hardly changes within 1000ms.**

So identical GET API calls should return the same response within 1000ms. By **identical**, it means `path` and `config` are [deeply equal](https://bigfrontend.dev/problem/implement-deep-equal-isEqual).

You create `getAPIWithMerging(path: string, config: SomeConfig)`, which works like following.

```js

getAPIWithMerging('/list', { keyword: 'bfe'}).then(...)  
// 1st call,  this will call getAPI

getAPIWithMerging('/list', { keyword: 'bfe'}).then(...) 
// 2nd call is identical to 1st call, 
// so getAPI is not called, 
// it resolves when 1st call resolves

getAPIWithMerging('/list', { keyword: 'dev'}).then(...)
// 3rd call is not identical, so getAPI is called

// after 1000ms
getAPIWithMerging('/list', {keyword: 'bfe'}).then(...)
// 4th call is identical to 1st call, 
// but since after 1000ms, getAPI is called.
```

Attention for memory leak!
--------------------------

Your cache system should not bloat. For this problem, you should have 5 cache entries at maximum, which means:

```js
getAPIWithMerging('/list1', { keyword: 'bfe'}).then(...) 
// 1st call, call callAPI(), add a cache entry
getAPIWithMerging('/list2', { keyword: 'bfe'}).then(...) 
// 2nd call, call callAPI(), add a cache entry
getAPIWithMerging('/list3', { keyword: 'bfe'}).then(...) 
// 3rd call, call callAPI(), add a cache entry
getAPIWithMerging('/list4', { keyword: 'bfe'}).then(...) 
// 4th call, call callAPI(), add a cache entry
getAPIWithMerging('/list5', { keyword: 'bfe'}).then(...) 
// 5th call, call callAPI(), add a cache entry

getAPIWithMerging('/list6', { keyword: 'bfe'}).then(...) 
// 6th call, call callAPI(), add a cache entry
// cache of 1st call is removed

getAPIWithMerging('/list1', { keyword: 'bfe'}).then(...) 
// identical with 1st call, but cache of 1st call is removed
// new cache of entry is added
```

clear()
-------

For test purpose, please provide a clear method to clear all cache.

```js
getAPIWithMerging.clearCache()
```


[Source From](https://bigfrontend.dev/problem/merge-identical-API-calls)

  