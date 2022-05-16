---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - medium

---
  
# validate number string

## Question
Give a number string, check if it is valid number.

By "valid", we mean if it validates as one of below formats:

1.  integer, such as `'0'`, `'-1'`
2.  decimal number like `'1.0'`, `'-2.335'`
3.  exponential notation `-12.3e45`

Formats such as `BigInt`, `Infinity`, `NaN`, octal and hexadecimal .etc are out of scope, you can treat them as invalid.

Pay attention to the sign `+` `-`.

Note
----

The test cases are not covering all the possible cases, since this is not a problem to test your knowledge against JavaScript language spec.

You should confirm with your interviewer about the scope and those edge cases.

`isNaN()` seems to be a nice trick, but could you solve without it?

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {string} str
 * @returns {boolean}
 */
function validateNumberString(str) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function validateNumberString(str: string): boolean {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/validate-number-string-1)

  