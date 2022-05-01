---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# convert HEX color to RGBA

Suppose you write some CSS code, you need to set [colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). You can choose hexadecimal notation `#fff` or Functional notation `rgba(255,255,255,1)`.

Can you write a function to convert hexadecimal notation to functional notation?

```js
hexToRgb('#fff')
// 'rgba(255,255,255,1)'
```

1.  Alpha channel should have **maximum 2 digits after decimal point, round up if needed.**
2.  Don't forget to do input validation


[Source From](https://bigfrontend.dev/problem/convert-HEX-color-to-RGBA)

  