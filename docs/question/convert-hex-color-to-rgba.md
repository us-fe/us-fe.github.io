---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# convert HEX color to RGBA

## Question
Suppose you write some CSS code, you need to set [colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). You can choose hexadecimal notation `#fff` or Functional notation `rgba(255,255,255,1)`.

Can you write a function to convert hexadecimal notation to functional notation?

```js
hexToRgb('#fff')
// 'rgba(255,255,255,1)'
```

1.  Alpha channel should have **maximum 2 digits after decimal point, round up if needed.**
2.  Don't forget to do input validation

## Code
:::: code-group
::: code-group-item javascript
```javascript
/**
 * @param {string} hex
 * @return {string}
 */
function hexToRgba(hex) {
  // your code here
}
```
:::
    ::: code-group-item typescript:active
```typescript
function hexToRgba(hex: string): string {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/convert-HEX-color-to-RGBA)

  