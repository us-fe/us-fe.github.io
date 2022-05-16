---
tag:
  - Coding
  - React

---
  
# the React Counter app

## Question
As the first React problem, you are asked to create the famous Counter app.

1.  counter starts from 0.
2.  click the '+' button to increment.
3.  click the '-' button to decrement.

> `data-testid` is used to test your code, please keep them.

## Code
:::: code-group
::: code-group-item typescript:active
```typescript
import React from 'react'

export function App() {
  return (
    <div>
      <button data-testid="decrement-button">-</button>
      <button data-testid="increment-button">+</button>
      <p>clicked: 0</p>
    </div>
  )
}

// run your code by clicking the run button on the right
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/react/The-React-Counter)

  