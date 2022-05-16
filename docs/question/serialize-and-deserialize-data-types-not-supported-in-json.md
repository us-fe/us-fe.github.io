---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# serialize and deserialize data types not supported in JSON

## Question
Obviously, [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) and [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) are unable to handle data types that are not supported in JSON.

```ts
JSON.stringify({a:1n}) // Error
```

Also `undefined` is ignored in object properties or changed to `null`.

```ts
JSON.stringify([undefined]) // "[null]"
JSON.stringify({a: undefined }) // "{}"
```

`NaN` and `Infinity` are also treated as `null`

```ts
JSON.stringify([NaN, Infinity]) // "[null,null]"
JSON.stringify({a: NaN, b:Infinity}) // "{"a":null,"b":null}"
```

for more info, please refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description).

But sometimes we might want to be able to serialize these data types.

**Now please implement functions to serialize and deserialize following data types:**

1.  primitives (symbol is exluded)
2.  object literals
3.  array

Object literals and arrays are consisting of primitives and might be nested

Code below is expected to work:

```ts
parse(stringify([1n, null, undefined, NaN])) // [1n, null, undefined, NaN]
parse(stringify({a: undefined, b: NaN}) // {a: undefined, b: NaN}
```

You can use JSON.stringify() and JSON.parse() in your code or write your own.

## Code
:::: code-group
::: code-group-item javascript
```javascript
/**
 * type SerializablePrimitives = undefined | null | number | string | bigint | boolean

  * type Serializable = {
    [index: string]: Serializable
  } | Serializable[] | SerializablePrimitives
*/

/**
 * @params {Serializable} data
 * @returns {string}
 */
const stringify = (data) => {
  // your code here
}

/**
 * @params {string} data
 * @returns {Serializable}
 */
const parse = (data) => {
  // your code here
}
```
:::
    ::: code-group-item typescript:active
```typescript
type SerializablePrimitives = undefined | null | number | string | bigint | boolean

type Serializable = {
  [index: string]: Serializable
} | Serializable[] | SerializablePrimitives

const stringify = (data: Serializable): string => {
  // your code here
}

const parse = (data: string): Serializable => {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/serialize-and-deserialize-data-types-not-supported-in-JSON)

  