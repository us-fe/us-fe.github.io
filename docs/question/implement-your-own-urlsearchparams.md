---
tag:
  - Coding
  - JavaScript
  - Hard

---
  
# implement your own URLSearchParams

## Question
When we want to extract parameters from query string, [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) could be very handy.

Can you implement `MyURLSearchParams` which works the same ?

```js
const params = new MyURLSearchParams('?a=1&a=2&b=2')
params.get('a') // '1'
params.getAll('a') // ['1', '2']
params.get('b') // '2'
params.getAll('b') // ['2']


params.append('a', 3)
params.set('b', '3')
params.toString() // 'a=1&a=2&b=3&a=3'
```

There are [a few methods](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) on URLSearchParams, please implement them all.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
class MyURLSearchParams {
   /**
    * @params {string} init
    */
   constructor(init) {
     
   }
   
   /** 
    * @params {string} name
    * @params {any} value
    */
   append(name, value) {
     
   }
   
   /**
    * @params {string} name
    */
   delete(name) {
     
   }
   
   /**
    * @returns {Iterator} 
    */
   entries() {
     
   }
   
   /**
    * @param {(value, key) => void} callback
    */
   forEach(callback) {
     
   }
   
   /**
    * @param {string} name
    * returns the first value of the name
    */
   get(name) {
     
   }
   
   /**
    * @param {string} name
    * @return {string[]}
    * returns the value list of the name
    */
   getAll(name) {
     
   }
   
   /**
    * @params {string} name
    * @return {boolean}
    */
   has(name) {
     
   }
   
   /**
    * @return {Iterator}
    */
   keys() {
     
   }
   
   /**
    * @param {string} name
    * @param {any} value
    */
   set(name, value) {
     
   }
   
   // sor all key/value pairs based on the keys
   sort() {
     
   }
   
   /**
    * @return {string}
    */
   toString() {
     
   }
   
   /**
    * @return {Iterator} values
    */
   values() {
   
   }
 }
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/implement-your-own-URLSearchParams)

  