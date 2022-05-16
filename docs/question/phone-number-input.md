---
tag:
  - Coding
  - React

---
  
# phone number input

## Question
Create a `PhoneNumberInput` component.

1.  only accepts numerical digits
2.  format the number automatically as `(123)456-7890` by

*   adding the parenthesis when the 4th digit is entered
*   also adding `-` before 7th digit

You can use the default text input without any styling.

### Follow-up

What if user removes some digits in the middle, does caret jumps to the end in your approach?

> caret position is not covered in our tests.

## Code
:::: code-group
::: code-group-item typescript:active
```typescript
import React from 'react'
export function PhoneNumberInput() {
  // your code here
  return <input data-testid="phone-number-input"/>
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/react/phone-number-input)

  