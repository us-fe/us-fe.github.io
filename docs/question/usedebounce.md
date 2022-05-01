---
tag:
  - Coding
  - React
  - Hooks

---
  
# useDebounce()

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


[Source From](https://bigfrontend.dev/react/useDebounce)

  