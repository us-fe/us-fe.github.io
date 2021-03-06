---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# localStorage with expiration

## Question
[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) is a simple and handy client-side storage, but [you should avoid using it](https://www.youtube.com/watch?v=NNuTV-gjlZQ) because it is synchronous.

Also [Safari's ITP](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/) actually deletes client-side script-writable storage after 7 days of Safari use without interacting on your website, and localStorage is included.

Unlike Cookie, localStorage doesn't expire.

In this problem, **please create a localStorage wrapper with expiration support**

```js
myLocalStorage.setItem('bfe', 'dev', 1000)
myLocalStorage.getItem('bfe')
// 'dev'
```

after 1 second:

```js
myLocalStorage.getItem('bfe')
// null
```

**FYI**

localStorage is replaced with our own implementation to avoid security error. But the interface is the same, actually you don't need to care :)

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
window.myLocalStorage = {
  getItem(key) {
    // your code here
  },
  
  setItem(key, value, maxAge) {
    // your code here
  },
  
  removeItem(key) {
    // your code here
  },
  
  clear() {
    // your code here
  }
}
```
:::
    
::::


## Related

+ [create your own Cookie](./create-your-own-Cookie)
##  Source
[Source From](https://bigfrontend.dev/problem/localStorage-with-expiration)

  