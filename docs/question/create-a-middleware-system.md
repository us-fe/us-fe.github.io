---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# create a middleware system

Have you ever used [Express Middleware](http://expressjs.com/en/guide/using-middleware.html#using-middleware) before?

Middleware functions are functions with fixed interface that could be chained up like following two functions.

```js
app.use('/user/:id', function (req, res, next) {
  next()
}, function (req, res, next) {
  next(new Error('sth wrong'))
})
```

You are asked to create simplified Middleware system:

```ts

type Request = object

type NextFunc =  (error?: any) => void

type MiddlewareFunc = 
  (req: Request, next: NextFunc) => void

type ErrorHandler = 
  (error: Error, req: Request, next: NextFunc) => void

class Middleware {
  use(func: MiddlewareFunc | ErrorHandler) {
    // do any async operations
    // call next() to trigger next function
  }
  start(req: Request) {
    // trigger all functions with a req object
  }
}
```

Now we can do something similar with Express

```js
const middleware = new Middleware()

middleware.use((req, next) => {
   req.a = 1
   next()
})

middleware.use((req, next) => {
   req.b = 2
   next()
})


middleware.use((req, next) => {
   console.log(req)
})

middleware.start({})
// {a: 1, b: 2}
```

Notice that `use()` could also accept an ErrorHandler which has 3 arguments. The error handler is triggered if `next()` is called with an extra argument or uncaught error happens, like following.

```js

const middleware = new Middleware()

// throw an error at first function
middleware.use((req, next) => {
   req.a = 1
   throw new Error('sth wrong') 
   // or `next(new Error('sth wrong'))`
})

// since error occurs, this is skipped
middleware.use((req, next) => {
   req.b = 2
})

// since error occurs, this is skipped
middleware.use((req, next) => {
   console.log(req)
})

// since error occurs, this is called
middleware.use((error, req, next) => {
   console.log(error)
   console.log(req)
})

middleware.start({})
// Error: sth wrong
// {a: 1}
```


[Source From](https://bigfrontend.dev/problem/create-a-middleware-system)

  