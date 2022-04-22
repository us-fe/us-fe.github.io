
# 1. implement curry()

[题目来源](https://bigfrontend.dev/problem/implement-curry)


## 题目
[Currying](https://en.wikipedia.org/wiki/Currying) is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example

```js
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
```
more to read

[https://javascript.info/currying-partials](https://javascript.info/currying-partials)

[https://lodash.com/docs/4.17.15#curry](https://lodash.com/docs/4.17.15#curry)

## 解析

```js
**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(func) {
  // here ...args collects arguments as array (rest)
  return function curriedFunc(...args) {
    // Here we check if current args passed equals the number of args func expects
    if(args.length >= func.length) {
      // if yes, we spread args elements to pass into func (spread). This is our base case.
      return func(...args)
    } else {
      /* if not, we return a function that collects the next arguments passed in next and 
      we recursively call curriedFunc, accumalating and spreading the values of args first and then
      the values of next. next will take into consideration a variable amount of next arguments
      e.g (1, 2) (1) (1,2,3) */
      return function(...next) {
        return curriedFunc(...args,...next);
      }
    }
  }
}

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
```
## 答案

```js
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(func) {
  // your code here
  return function curried(...args1) {
    if (args1.length >= func.length) {
      return func.apply(null, args1);
    } else {
      return function (...args2) {
        return curried.apply(null, args1.concat(args2));
      }
    }

  }
}

```