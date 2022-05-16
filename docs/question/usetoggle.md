---
tag:
  - Coding
  - React
  - Hooks

---
  
# useToggle()

## Question
It is quite common to see switches and checkboxes in web apps.

Implement `useToggle()` to make things easier

```ts
function App() {
  const [on, toggle] = useToggle()
  ...
}
```

## Code
:::: code-group
::: code-group-item typescript:active
```typescript
export function useToggle(on: boolean): [boolean, () => void] {
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
[Source From](https://bigfrontend.dev/react/useToggle)

  