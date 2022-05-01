---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# implement promisify()

Let's take a look at following error-first callback.

```js
const callback = (error, data) => {
  if (error) {
    // handle the error
  } else {
    // handle the data
  }
}
```

Now think about async functions that takes above error-first callback as last argument.

```js
const func = (arg1, arg2, callback) => {
  // some async logic
  if (hasError) {
    callback(someError)
  } else {
    callback(null, someData)
  }
}
```

You see what needs to be done now. Please **implement promisify()** to make the code better.

```js
const promisedFunc = promisify(func)

promisedFunc().then((data) => {
  // handles data
}).catch((error) => {
  // handles error
})
```


[Source From](https://bigfrontend.dev/problem/promisify)

  