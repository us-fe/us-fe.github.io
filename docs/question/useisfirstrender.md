---
tag:
  - Coding
  - React
  - Hooks

---
  
# useIsFirstRender()

## Question
Create a hook to tell if it is the first render.

```ts
function App() {
  const isFirstRender = useIsFirstRender()
  // only true for the first render
  ...
}
```

## Code
:::: code-group
::: code-group-item typescript:active
```typescript
export function useIsFirstRender(): boolean {
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
[Source From](https://bigfrontend.dev/react/useIsFirstRender)

  