---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - Easy

---
  
# integer to roman numerals

## Question
> This is reverse of [133\. roman numerals to integer](/problem/roman-numerals-to-integer)

[Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals#Standard_form) are represented by combinations of following seven symbols, each with a fixed integer value.

Symbol

I

V

X

L

C

D

M

Value

1

5

10

50

100

500

1000

For [Standard form](https://en.wikipedia.org/wiki/Roman_numerals#Standard_form), subtractive notation is used, meaning 4 is `IV` rather than `IIII`, 9 is `IX` rather than `VIIII`. Same rule applies to 40(`XL`) and 900(`CM`) .etc.

Simply speaking, the roman numerals in standard form follow these rules.

1.  symbols are listed from highest to lowest, from left to right
2.  from left to right, if the next symbol value is bigger than current one, it means subtracting, otherwise adding.

Please implement `integerToRoman()`. The input are all integers within valid range.

```js

integerToRoman(123)
// 'CXXIII'

integerToRoman(1999)
// 'MCMXCIX'

integerToRoman(3420)
// 'MMMCDXX'
```

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */
function integerToRoman(num) {
  // your code here
}
```
:::
    ::: code-group-item typescript
```typescript
function integerToRoman(num: number): string {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/integer-to-roman)

  