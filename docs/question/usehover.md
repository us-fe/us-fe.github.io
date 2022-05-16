---
tag:
  - Coding
  - React
  - Hooks

---
  
# useHover()

## Question
It is common to see conditional rendering based on hover state of some element.

We can achive it by CSS pseduo class `:hover`, but for more complex cases it might be better to have state controlled by script.

Now you are asked to create a `useHover()` hook.

```ts
function App() {
  const [ref, isHovered] = useHover()
  return <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
}
```

## Code
:::: code-group
::: code-group-item typescript:active
```typescript
import { Ref } from 'react'

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
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
[Source From](https://bigfrontend.dev/react/useHover)

  