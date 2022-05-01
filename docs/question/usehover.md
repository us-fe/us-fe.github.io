---
tag:
  - Coding
  - React
  - Hooks

---
  
# useHover()

It is common to see conditional rendering based on hover state of some element.

We can achive it by CSS pseduo class `:hover`, but for more complex cases it might be better to have state controlled by script.

Now you are asked to create a `useHover()` hook.

```ts
function App() {
  const [ref, isHovered] = useHover()
  return <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
}
```


[Source From](https://bigfrontend.dev/react/useHover)

  