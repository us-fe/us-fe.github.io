---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# convert snake_case to camelCase

## Question
Do you prefer [snake\_case](https://en.wikipedia.org/wiki/Snake_case) or [camelCase](https://en.wikipedia.org/wiki/Camel_case) ?

Anyway, please create a function to convert snake\_case to camcelCase.

```js

snakeToCamel('snake_case') 
// 'snakeCase'
snakeToCamel('is_flag_on') 
// 'isFlagOn'
snakeToCamel('is_IOS_or_Android') 
// 'isIOSOrAndroid'
snakeToCamel('_first_underscore') 
// '_firstUnderscore'
snakeToCamel('last_underscore_') 
// 'lastUnderscore_'
snakeToCamel('_double__underscore_') 
// '_double__underscore_'
```

contiguous underscore `__`, leading underscore `_a`, and trailing underscors `a_` should be kept untouched.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {string} str
 * @return {string}
 */
function snakeToCamel(str) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/convert-snake_case-to-camelCase)

  