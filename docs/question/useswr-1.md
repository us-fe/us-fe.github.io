---
tag:
  - Coding
  - React
  - Hooks

---
  
# useSWR() I

## Question
[SWR](https://swr.vercel.app/) is a popular library of data fetching.

Let's try to implement the basic usage by ourselves.

```ts
import React from 'react'

function App() {
  const { data, error } = useSWR('/api', fetcher)
  if (error) return <div>failed</div>
  if (!data) return <div>loading</div>

  return <div>succeeded</div>
}
```

1.  this is not to replicate the true implementation of `useSWR()`
2.  The first argument `key` is for deduplication, we can safely ignore it for now

## Code
:::: code-group
::: code-group-item typescript:active
```typescript
export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T
  error?: E
} {
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
[Source From](https://bigfrontend.dev/react/useSWR-1)

  