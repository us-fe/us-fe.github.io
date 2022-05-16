---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - medium

---
  
# LRU - Chrome storage automatic eviction

## Question
Chrome uses LRU algorithm to evict data when it has to.

Wactch [this Youtube video](https://youtu.be/NNuTV-gjlZQ?t=387) for detail explanation, starting from 6:25 to 7:38.

Now you are asked to implement similar - Implement a class `LRUStorage`.

1.  This is of course not to reflect the true implementation in Chrome.
2.  `getData` and `setData` should both be treated as data being 'used'.
3.  considering time precision issue, your class needs to accept `getTimestamp` as second argument of constructor function for our tests.

```ts
interface OriginData {
  origin: string
  lastUsed: number
  size: number
  persistent: boolean
}

interface LRUStorage {
  capacity: number
  // to use the data for origin
  // return size of the data or undefined if not exist
  getData(origin: string): OriginData | undefined
  
  // updating data for origin
  // return boolean to indicate success or failure
  // If the total size exceeds capacity,
  // Least Recently Used non-persistent origin data other than itself should be evicted.

  setData(origin: string, size: number): boolean

  // manually clear data for origin
  clearData(origin: string): void

  // change data for origin to be persistent
  // it only handles existing data not the data added later
  // persistent data cannot be evicted unless manually clear it
  makePersistent(origin: string): void 
}
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @typedef {object} OriginData
 * @property {string} origin
 * @property {number} lastUsed
 * @property {number} size
 * @property {boolean} persistent
 */

class MyLRUStorage  {
  /**
   * @param {number} capacity
   * @param {() => number} getTimestamp
   */
  constructor(capacity, getTimestamp) {
    this.capacity = capacity
    this.getTimestamp = getTimestamp
  }

  /**
   * @param {string} origin
   * @returns {OriginData | undefined}
   */
  getData(origin) {

  }

  /**
   * @param {string} origin
   * @param {number} size
   * @returns {boolean}
   */
  setData(origin, size) {

  }

  /**
   * @param {string} origin
   * @returns {void}
   */
  clearData(origin) {

  }

  /**
   * @param {string} origin
   * @returns {void}
   */
  makePersistent(origin) {

  }
}
```
:::
    ::: code-group-item typescript
```typescript
interface OriginData {
  origin: string
  lastUsed: number
  size: number
  persistent: boolean
}

interface LRUStorage {
  capacity: number
  getData(origin: string): OriginData | undefined
  setData(origin: string, size: number): boolean
  clearData(origin: string): void
  makePersistent(origin: string): void 
}

class MyLRUStorage implements LRUStorage {
  capacity: number
  getTimestamp: () => void
  constructor(capacity: number, getTimestamp: () => void) {
    this.capacity = capacity
    this.getTimestamp = getTimestamp
  }
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/lru-chrome-storage-eviction)

  