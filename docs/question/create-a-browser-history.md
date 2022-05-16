---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# create a browser history

## Question
I believe you are very familiar about your browser you are currently visiting [https://bigfrontend.dev](https://bigfrontend.dev) with.

The common actions relating to history are:

1.  `new BrowserHistory()` - when you open a new tab, it is set with an empty history
2.  `goBack()` - go to last entry, notice the entries are kept so that `forward()` could get us back
3.  `forward()` - go to next visited entry
4.  `visit()` - when you enter a new address or click a link, this adds a new entry but truncate the entries which we could `forward()` to.

Say we start a new tab, this is the empty history.

```js
[ ] 
```

Then visit url A, B, C in turn.

```js
[ A, B, C]
        ↑
```

We are currently at C, we could `goBack()` to B, then to A

```js
[ A, B, C]
  ↑          
```

`forward()` get us to B

```js
[ A, B, C]
     ↑          
```

Now if we visit a new url D, since we are currently at B, C is truncated.

```js
[ A, B, D]
        ↑
```

You are asked to implement a `BrowserHistory` class to mimic the behavior.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
class BrowserHistory {
  
  /**
   * @param {string} url
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */
  constructor(url) {

  }
  /**
   * @param { string } url
   */
  visit(url) {

  }
  
  /**
   * @return {string} current url
   */
  get current() {

  }
  
  // go to previous entry
  goBack() {

  }
  
  // go to next visited url
  forward() {

  }
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/create-a-browser-history)

  