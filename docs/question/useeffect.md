---
tag:
  - Quiz
  - React

---
  
# useEffect

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [state, setState] = useState(0)
  console.log(state)

  useEffect(() => {
    setState(state => state + 1)
  }, [])

  useEffect(() => {
    console.log(state)
    setTimeout(() => {
      console.log(state)
    }, 100)
  }, [])

  return null
}

ReactDOM.render(<App/>, document.getElementById('root'))
```
    
## Answer
```js
0
0
1
0;
```


##  Source
[Source From](https://bigfrontend.dev/react-quiz/useEffect)

  