---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - Medium

---
  
# remove duplicate characters in a string

## Question
Given a string, write a function to remove the duplicate characters to make sure that each character only occurs once.

For example

```js
'xyzabcxyzabc'
```

Each character appears twice, we could make it unique as follows

```js
'xyzabc'
'xyabcz'
'xabcyz'
'abcxyz'
'abxyzc'
.....
```

Above all substrings subsequences ([\*](https://bigfrontend.dev/problem/112/discuss/394)) contains unique characters, but you need to return the **smallest** one in lexicographical order( 'a' -> 'z'), which is `'abcxyz'`.

All input only contains valid lowercase alphabets only.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {string} str
 * @return {string}
 */
function smallestUniqueSubstr(str) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/remove-duplicate-letters-in-a-string)

  