---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# roman numerals to integer

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

Please implement `romanToInteger()`. The input are all valid strings.

```js

romanToInteger('CXXIII')
// 123

romanToInteger('MCMXCIX')
// 1999

romanToInteger('MMMCDXX')
// 3420
```


[Source From](https://bigfrontend.dev/problem/roman-numerals-to-integer)

  