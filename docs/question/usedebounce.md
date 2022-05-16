---
tag:
  - Coding
  - React
  - Hooks

---
  
# useDebounce()

## Question
For a frequently changing value like text input you might want to debounce the changes.

Implement `useDebounce()` to achieve this.

```ts
function App() {
  const [value, setValue] = useState(...)
  // this value changes frequently, 
  const debouncedValue = useDebounce(value, 1000)
  // now it is debounced
}
```

The logic should be similar to [6\. implement basic debounce()](/problem/implement-basic-debounce)

## Code
:::: code-group
::: code-group-item typescript:active
```typescript
export function useDebounce<T>(value: T, delay: number): T {
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
[Source From](https://bigfrontend.dev/react/useDebounce)

  