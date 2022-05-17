---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# uglify CSS class names

## Question
If you use [css-loader](https://github.com/webpack-contrib/css-loader) in your webpack project, `localIdentName` could be used to transform class names, like below:

```js
localIdentName: "[path][name]__[local]--[hash:base64:5]",
```

Or you can create your own function to generate class names by setting `getLocalIdent`.

**Now please create a function to generate unique class names** following rules below.

1.  only use alphabets: `a` to `z` , `A` to `Z`
2.  return one unique class name each time function is called
3.  the class name sequence should first be in order of length, then in Alphabetical order(lowercase in front).
4.  should provide a function to reset the sequence

```js
getUniqueClassName()
// 'a'

getUniqueClassName()
// 'b'

getUniqueClassName()
// 'c'

// skip cases till 'Y'

getUniqueClassName()
// 'Z'

getUniqueClassName()
// 'aa'

getUniqueClassName()
// 'ab'

getUniqueClassName()
// 'ac'

// skip more cases

getUniqueClassName()
// 'ZZ'

getUniqueClassName()
// 'aaa'

getUniqueClassName()
// 'aab'

getUniqueClassName()
// 'aac'

getUniqueClassName.reset()

getUniqueClassName()
// 'a'
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @returns {string}
 */
function getUniqueClassName() {
  // your code here
}

getUniqueClassName.reset = function() {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function getUniqueClassName(): string {
  // your code here
}

getUniqueClassName.reset = function() {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/unique-class-name)

  