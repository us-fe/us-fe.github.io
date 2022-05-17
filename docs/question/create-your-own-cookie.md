---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# create your own Cookie

## Question
We can get and set cookie by `document.cookie`.

```js
document.cookie = 'bfe=dev'
// "bfe=dev"

document.cookie = 'bfe1=dev1'
// "bfe1=dev1"

document.cookie
// "bfe=dev; bfe1=dev1"
```

Please create your own `myCookie`.

1.  it should support get and set.

```js
document.myCookie = 'bfe=dev'
// "bfe=dev"

document.myCookie = 'bfe1=dev1'
// "bfe1=dev1"

document.myCookie
// "bfe=dev; bfe1=dev1"
```

2.  there a few options to cookie, but in this problem, you only need to support `max-age` which means the cookie should be deleted after certain time(in seconds).

```js
document.myCookie = 'bfe=dev; max-age=1'
// "bfe=dev; max-age=1"

document.myCookie
// "bfe=dev"
```

after 1 second

```js
document.myCookie
// ""
```

3.  in your code, please enable `myCookie` in `install()` and remove the logic in `uninstall()`, these are used in judging.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
// enable myCookie
function install() {
  // your code here
}

// disable myCookie
function uninstall() {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/create-your-own-Cookie)

  