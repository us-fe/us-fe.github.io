---
tag:
  - Coding
  - React
  - Hooks

---
  
# useTimeout()

## Question
Create a hook to easily use `setTimeout(callback, delay)`.

1.  reset the timer if delay changes
2.  DO NOT reset the timer if only callback changes

## Code
:::: code-group
::: code-group-item typescript:active
```typescript
export function useTimeout(callback: () => void, delay: number) {
  // your code here
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
[Source From](https://bigfrontend.dev/react/usetimeout)

  